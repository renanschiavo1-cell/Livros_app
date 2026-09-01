import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../../models/livro';
import { LivroCardComponent } from '../livro-card/livro-card.component';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [CommonModule, LivroCardComponent],
  templateUrl: './lista-livros.component.html'
})
export class ListaLivrosComponent {
  @Input() livros: Livro[] = [];
  @Output() livroExcluido = new EventEmitter<string>();

  onExcluir(id: string): void {
    this.livroExcluido.emit(id);
  }
}