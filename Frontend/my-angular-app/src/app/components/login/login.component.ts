import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService) {}

  login(): void {
    const success = this.authService.login(this.email, this.password);
    if (!success) {
      this.error = 'Invalid credentials';
    }
  }
}
