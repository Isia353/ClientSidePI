import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';  // Update with your Laravel API URL
  private accessToken: string | null = null;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('client_id', 'your-client-id');
    body.set('client_secret', 'your-client-secret');
    body.set('email', email);
    body.set('password', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(`${this.apiUrl}/login`, body.toString(), { headers });
  }

  setAccessToken(token: string): void {
    this.accessToken = token;
    // You might want to store the token in a more secure way (e.g., local storage).
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  isLoggedIn(): boolean {
    return !!this.accessToken;
  }

  logout(): void {
    this.accessToken = null;
    // Add any additional logout logic (e.g., clearing local storage).
  }

  // Include this method to add the access token to headers
  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getAccessToken()}`,
    });

    return headers;
  }
}