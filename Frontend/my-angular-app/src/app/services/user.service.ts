import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${id}`, userData);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/${id}`);
  }
}
