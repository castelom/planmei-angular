import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBarComponent } from '../../shared/components/alert-bar/alert-bar.component';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule, AlertBarComponent, OverviewComponent],
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {
  activeTab: string = 'overview';

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
