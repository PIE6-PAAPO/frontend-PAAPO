import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CheckinModalComponent } from '../app/components/checkin-modal/checkin-modal.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend-PAAPO';
    resultado: string | null = null;

  constructor(private dialog: MatDialog) {}

  openCheckin() {
    const dialogRef = this.dialog.open(CheckinModalComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe((valor: number | undefined) => {
      if (valor !== undefined) {
        const dataHora = new Date().toISOString();
        this.resultado = `Você escolheu: ${valor} às ${dataHora}`;
        console.log({ valor, dataHora });
      }
    });
  }
}
