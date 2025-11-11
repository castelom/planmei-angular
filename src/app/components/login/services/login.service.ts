import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface LoginResponse {
  token: string;
  user_name?: string;
  user_id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://localhost:7151';

  constructor(private http: HttpClient) {}

  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await firstValueFrom(
      this.http.post<LoginResponse>(`${this.baseUrl}/Account/login`, { username, password })
    );
    return response;
  }
}