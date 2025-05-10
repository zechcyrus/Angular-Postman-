import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onRegister(formData: any) {
    localStorage.setItem('user', JSON.stringify(formData));
    alert('User registered!');
    this.router.navigate(['/login']);
  }
}
