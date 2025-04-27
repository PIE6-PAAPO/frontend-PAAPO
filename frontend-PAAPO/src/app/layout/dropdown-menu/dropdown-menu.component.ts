import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  imports: [CommonModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent {
  mostrarOpcoes: boolean = false;

  toggleOpcoes(): void {
    this.mostrarOpcoes = !this.mostrarOpcoes;
  }
}
