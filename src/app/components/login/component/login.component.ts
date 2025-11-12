import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['/manage']);
    }
  }

  async onSubmit(): Promise<void> {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/manage']);
      },
      error: () => {
        alert('Login failed. Please check your credentials and try again.');
      }
    });
  }
}