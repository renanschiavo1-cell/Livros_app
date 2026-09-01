import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-livro-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './livro-card.component.html'
})
export class LivroCardComponent {
  @Input() livro!: Livro;
  @Output() excluir = new EventEmitter<string>();

  onExcluir(): void {
    if (this.livro.id) {
      this.excluir.emit(this.livro.id);
    }
  }
}