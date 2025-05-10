import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  register(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/login']);
  }

  login(email: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/profile']);
      return true;
    }
    return false;
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
