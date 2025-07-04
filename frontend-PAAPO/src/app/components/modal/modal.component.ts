import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Exercicio {
  titulo: string;
  descricao: string;
  fotoUrl: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ModalComponent implements OnInit {
  exercicios: Exercicio[] = [];
  indiceAtual = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Exercicio[]>('assets/exercicios.json').subscribe({
      next: (data) => (this.exercicios = data),
      error: (err) => console.error('Erro ao carregar exercícios:', err),
    });
  }

  get titulo(): string {
    return this.exercicios[this.indiceAtual]?.titulo || '';
  }

  get descricao(): string {
    return this.exercicios[this.indiceAtual]?.descricao || '';
  }

  get fotoUrl(): string {
    return this.exercicios[this.indiceAtual]?.fotoUrl || '';
  }

  get progresso(): number {
    if (!this.exercicios.length) return 0;
    return Math.round(((this.indiceAtual + 1) / this.exercicios.length) * 100);
  }

  onAvancar(): void {
    if (this.indiceAtual < this.exercicios.length - 1) {
      this.indiceAtual++;
    } else {
      alert('Parabéns! Você finalizou os exercícios.');
    }
  }
}
