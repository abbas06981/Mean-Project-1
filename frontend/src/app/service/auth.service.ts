import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  registerUser(name: string, email: string, password: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/register', {
      name,
      email,
      password,
    });
  }
  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/login', {
      email,
      password,
    });
  }

  get isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token; // double negation returns true if token exists, false otherwise
  }

  get userName() {
    const userData = localStorage.getItem('user');
    try {
      return userData ? JSON.parse(userData)?.name ?? null : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  }
  get isAdmin() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      return parsedUser.isAdmin === true;
    }
    return false;
  }
  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
