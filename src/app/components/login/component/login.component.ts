import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';

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
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/manage']);
    }
  }

  async onSubmit(): Promise<void> {
    try {
      const response = await this.loginService.login(this.username, this.password);
      if (response.token) {
        localStorage.setItem('token', response.token);

        const payload = JSON.parse(atob(response.token.split('.')[1]));
        localStorage.setItem('user_name', payload.user_name);
        localStorage.setItem('user_id', payload.user_id);

        this.router.navigate(['/manage']);
      }
    } catch (error) {
      console.error('Error', error);
    }
  }
}