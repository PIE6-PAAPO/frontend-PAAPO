import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout-modal',
  imports: [MatDialogModule,MatButtonModule,CommonModule],
  templateUrl: './checkout-modal.component.html',
  styleUrl: './checkout-modal.component.scss'
})
export class CheckoutModalComponent {

  numbers = Array.from({ length: 11 }, (_, i) => i);
  selected: number | null = null;

  constructor(private dialogRef: MatDialogRef<CheckoutModalComponent>) {}

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
