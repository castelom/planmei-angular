import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FinanceService } from '../service/finance.service';

interface OverviewData {
  revenue?: number;
  expenses?: number;
  targetAmount?: number;
  error?: string;
}

interface Month {
  label: string;
  value: number;
}

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  overviewData: OverviewData = {};
  months: Month[] = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 }
  ];
  selectedMonth: number = 9;
  profit: string = '0.00';
  targetAmount: string = '0.00';
  targetReached: number = 0;
  loading: boolean = false;

  constructor(private financeService: FinanceService) {}

  async ngOnInit(): Promise<void> {
    await this.fetchOverview();
  }

  async onMonthChange(): Promise<void> {
    await this.fetchOverview();
  }

  async fetchOverview(): Promise<void> {
    this.loading = true;
    try {
      const data = await this.financeService.getOverview(this.selectedMonth.toString());
      this.overviewData = data;
      
      const revenue = this.overviewData.revenue || 0;
      const expenses = this.overviewData.expenses || 0;
      const target = this.overviewData.targetAmount || 0;
      
      this.profit = (revenue - expenses).toFixed(2);
      this.targetAmount = target.toFixed(2);
      this.targetReached = target > 0 ? (revenue / target) * 100 : 0;
    } catch (error) {
      console.error('Error fetching overview:', error);
      this.overviewData = { error: "Request error" };
      this.profit = '0.00';
      this.targetAmount = '0.00';
      this.targetReached = 0;
    } finally {
      this.loading = false;
    }
  }

  formatCurrency(value: number | undefined): string {
    return (value || 0).toFixed(2);
  }

  getProgressPercentage(): number {
    return Math.floor(this.targetReached);
  }

  saySomething(): void {
    this.selectedMonth = 1;
    this.fetchOverview();
  }
}