import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss',
})
export class UserHomeComponent {
  constructor(private router: Router) {}

  startSession(): void {
    this.router.navigate(['/exercicios']);
  }
}
