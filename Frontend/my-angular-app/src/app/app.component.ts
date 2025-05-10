import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = {
    name: '',
    address: '',
    mobile: '',
    email: '',
    password: ''
  };

  registeredUser: any;
  allUsers: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  onRegister() {
    this.userService.registerUser(this.user).subscribe({
      next: (res) => {
        this.registeredUser = res;
        this.loadUsers();
        this.user = { name: '', address: '', mobile: '', email: '', password: '' };
      },
      error: (err) => {
        console.error('Registration failed:', err);
      }
    });
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.allUsers = res;
      },
      error: (err) => {
        console.error('Failed to load users:', err);
      }
    });
  }
}
