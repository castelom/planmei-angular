import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  getStarted(): void {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/manage']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  learnMore(): void {
    this.router.navigate(['/about']);
  }
}