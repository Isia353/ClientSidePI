import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class apiService {
  private apiUrl = 'http://localhost:8000/api'; // Update this with your Laravel API URL

  constructor(private authService: AuthService, private http: HttpClient) {}

  login(username: string, password: string): void {
    this.authService.login(username, password).subscribe(
      (response: any) => {
        const accessToken = response.access_token;
        this.authService.setAccessToken(accessToken);
      },
      (error) => {
        console.error('Error obtaining access token:', error);
      }
    );
  }

 
fetchData(): Observable<any> {
  return this.http.get(`${this.apiUrl}/animal`, { headers: this.authService.getHeaders() });
}

  logout(): void {
    this.authService.logout();
  }
}