import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-formulario-livro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-livro.component.html'
})
export class FormularioLivroComponent {
  @Output() livroAdicionado = new EventEmitter<void>();

  novoLivro: Livro = {
    titulo: '',
    autor: '',
    categoria: '',
    ano: new Date().getFullYear(),
    status: 'disponivel',
    descricao: ''
  };

  mensagemErro: string = '';

  constructor(private livrosService: LivrosService) {}

  salvarLivro(): void {
    if (!this.novoLivro.titulo || !this.novoLivro.autor) {
      this.mensagemErro = 'Título e autor são obrigatórios.';
      return;
    }

    this.mensagemErro = '';
    
    this.livrosService.createLivro(this.novoLivro).subscribe({
      next: () => {
        this.livroAdicionado.emit();
        this.resetarFormulario();
      },
      error: () => this.mensagemErro = 'Falha ao conectar com a API.'
    });
  }

  resetarFormulario(): void {
    this.novoLivro = {
      titulo: '',
      autor: '',
      categoria: '',
      ano: new Date().getFullYear(),
      status: 'disponivel',
      descricao: ''
    };
  }
}