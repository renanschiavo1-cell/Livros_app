import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../models/livro';
import { ListaLivrosComponent } from '../../components/lista-livros/lista-livros.component';
import { FormularioLivroComponent } from '../../components/formulario-livro/formulario-livro.component';

@Component({
  selector: 'app-livros-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ListaLivrosComponent, FormularioLivroComponent],
  templateUrl: './livros-page.component.html'
})
export class LivrosPageComponent implements OnInit {
  livros: Livro[] = [];
  livrosFiltrados: Livro[] = [];
  termoBusca: string = '';

  constructor(private livrosService: LivrosService) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.livrosService.getLivros().subscribe({
      next: (dados) => {
        this.livros = dados;
        this.livrosFiltrados = dados;
      },
      error: (erro) => console.error('Erro ao carregar livros', erro)
    });
  }

  filtrarLivros(): void {
    this.livrosFiltrados = this.livros.filter(livro =>
      livro.titulo.toLowerCase().includes(this.termoBusca.toLowerCase()) ||
      livro.autor.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }

  aoLivroAdicionado(): void {
    this.carregarLivros();
  }

  aoLivroExcluido(id: string): void {
    this.livrosService.deleteLivro(id).subscribe({
      next: () => this.carregarLivros(),
      error: (erro) => console.error('Erro ao excluir', erro)
    });
  }
}