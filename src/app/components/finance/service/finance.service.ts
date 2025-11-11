import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface OverviewData {
  // Define the structure of your overview data here
  // For example:
  // totalIncome: number;
  // totalExpenses: number;
  // balance: number;
  // transactions: any[];
}

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private baseUrl = 'https://localhost:7151'; // Update this to your actual API base URL

  constructor(private http: HttpClient) {}

  async getOverview(month: string): Promise<OverviewData> {
    const response = await firstValueFrom(
      this.http.get<OverviewData>(`${this.baseUrl}/api/Financial/getOverview?month=${month}`)
    );
    return response;
  }
}