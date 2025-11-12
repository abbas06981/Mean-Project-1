import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  authService = inject(AuthService);
  canActivate(): boolean {
    const token = this.authService.isLoggedIn;
    const admin = this.authService.isAdmin;

    if (token) {
      // ✅ User is logged in
      if (admin) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    } else {
      // ❌ User not logged in, redirect to login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
