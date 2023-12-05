import { Component } from '@angular/core';
import { AuthService } from '../auth.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
   
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Handle successful login (e.g., store token in localStorage)
        console.log('Login successful:', response);
        localStorage.setItem('token', response.token);
      },
      (error) => {
        // Handle login error
        console.error('Login error:', error);
      }
    );
  }

}
