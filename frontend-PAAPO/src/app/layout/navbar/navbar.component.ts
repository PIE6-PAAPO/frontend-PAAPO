import { Component, HostListener } from '@angular/core';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports:[DropdownMenuComponent,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  
  mostrarDropdown:boolean = false;

  ngOnInit(): void{

    this.verificarTamanhoTela();

    window.addEventListener('resize',this.verificarTamanhoTela.bind(this));
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:Event): void {
    this.verificarTamanhoTela();
  }

  verificarTamanhoTela(): void{
   this.mostrarDropdown = window.innerWidth <= 485;
  }

}
