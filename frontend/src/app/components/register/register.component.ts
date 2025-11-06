import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  http = inject(HttpClient);
  router = inject(Router);

  registerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  registerUser() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      console.warn('Form is invalid');
      return;
    }

    const value = this.registerForm.value;

    this.authService
      .registerUser(value.name ?? '', value.email ?? '', value.password ?? '')
      .subscribe((result) => {
        console.log(result);
        this.router.navigateByUrl('/login');
      });
  }
}
