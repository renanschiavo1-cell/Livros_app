import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-livro-detalhe-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './livro-detalhe-page.component.html'
})
export class LivroDetalhePageComponent implements OnInit {
  livro?: Livro;
  mensagemErro: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livrosService: LivrosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.livrosService.getLivroById(id).subscribe({
        next: (dados) => this.livro = dados,
        error: () => this.mensagemErro = 'Livro não encontrado ou falha na API.'
      });
    }
  }

  alterarStatus(novoStatus: string): void {
    if (this.livro && this.livro.id) {
      const livroAtualizado = { ...this.livro, status: novoStatus };
      this.livrosService.updateLivro(this.livro.id, livroAtualizado).subscribe({
        next: (dados) => this.livro = dados,
        error: () => this.mensagemErro = 'Falha ao atualizar o status.'
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/livros']);
  }
}