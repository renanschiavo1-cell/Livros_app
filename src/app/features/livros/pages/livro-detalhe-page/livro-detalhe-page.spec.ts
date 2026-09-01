import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDetalhePage } from './livro-detalhe-page';

describe('LivroDetalhePage', () => {
  let component: LivroDetalhePage;
  let fixture: ComponentFixture<LivroDetalhePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroDetalhePage],
    }).compileComponents();

    fixture = TestBed.createComponent(LivroDetalhePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
