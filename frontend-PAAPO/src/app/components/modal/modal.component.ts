import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  exercicios = [
    {
      titulo: 'Rotação cervical',
      descricao:
        'Incline levemente a cabeça para frente, aproximando o queixo do peito e gire lentamente a cabeça para o lado direito, como se quisesse desenhar um círculo com a cabeça. Realize o movimento 10 vezes e depois repita girando para a esquerda.',
      fotoUrl:
        'https://www.drsabag.com.br/wp-content/uploads/2024/02/rotacao-do-pescoco.jpg',
    },

    {
      titulo: 'Circundação de ombro',
      descricao:
        'Fique em pé ou sentado com a postura reta, levante o braço estendido para o lado ou para a frente e faça movimentos circulares lentos com o braço, girando o ombro como se estivesse desenhando um grande círculo no ar. Faça o movimento para frente 10 vezes e depois repita girando para trás mais 10 vezes.',
      fotoUrl:
        'https://www.kenhub.com/thumbor/rQcBQb7fKmjdwPMsFxGMTiVlZz4=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/9142/Circumduction__of_upper_limb.png',
    },
  ];

  indiceAtual = 0;

  get titulo(): string {
    return this.exercicios[this.indiceAtual].titulo;
  }

  get descricao(): string {
    return this.exercicios[this.indiceAtual].descricao;
  }

  get fotoUrl(): string {
    return this.exercicios[this.indiceAtual].fotoUrl;
  }

  get progresso(): number {
    return Math.round(((this.indiceAtual + 1) / this.exercicios.length) * 100);
  }

  onAvancar() {
    if (this.indiceAtual < this.exercicios.length - 1) {
      this.indiceAtual++;
    } else {
      // Aqui você pode fechar o modal ou exibir "concluído"

      alert('Parabéns! Você finalizou os exercícios.');
    }
  }
}
