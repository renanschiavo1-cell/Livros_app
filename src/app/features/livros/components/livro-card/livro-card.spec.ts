import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivroCardComponent } from './livro-card.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LivroCardComponent', () => {
  let component: LivroCardComponent;
  let fixture: ComponentFixture<LivroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroCardComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({}) }
        }
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(LivroCardComponent);
    component = fixture.componentInstance;
    
    component.livro = {
      id: '123',
      titulo: 'Test Livro',
      autor: 'Test Autor',
      categoria: 'TI',
      ano: 2024,
      status: 'disponivel'
    };
    
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});