import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkin-modal',
  imports: [MatDialogModule,MatButtonModule,CommonModule],
  templateUrl: './checkin-modal.component.html',
  styleUrl: './checkin-modal.component.scss'
})
export class CheckinModalComponent {

  numbers = Array.from({ length: 11 }, (_, i) => i);
  selected: number | null = null;

  constructor(private dialogRef: MatDialogRef<CheckinModalComponent>) {}

  select(index: number): void {
    this.selected = index;
  }

  confirm(): void {
    if (this.selected !== null) {
      this.dialogRef.close(this.selected);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  getColor(index: number): string {
    const colors = [
      '#82243B', '#8F2B48', '#9D3254', '#AA3860', '#B83F6C',
      '#BA3D5C', '#C85074', '#D6627C', '#E47584', '#F2888D', '#F67695'
    ];
    return colors[index];
  }


}
