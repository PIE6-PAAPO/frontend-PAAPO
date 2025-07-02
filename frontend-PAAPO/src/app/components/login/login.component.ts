// src/app/components/login/login.component.ts

import { Component } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { LoginPayload } from '../../models/login-payload.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onLogin(): void {
    const payload: LoginPayload = {
      email: this.email,
      password: this.password,
    };

    this.userService.login(payload).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/user-home']);
      },
      error: (err) => {
        this.errorMessage = 'Credenciais inválidas.';
        console.error(err);
      },
    });
  }
}
