import { Routes } from '@angular/router';
import { LivrosPageComponent } from './features/livros/pages/livros-page/livros-page.component';
import { LivroDetalhePageComponent } from './features/livros/pages/livro-detalhe-page/livro-detalhe-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'livros', pathMatch: 'full' },
  { path: 'livros', component: LivrosPageComponent },
  { path: 'livros/:id', component: LivroDetalhePageComponent }
];