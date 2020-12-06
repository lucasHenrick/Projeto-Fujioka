import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoPerfilComponent } from './agendamento-perfil.component';

describe('AgendamentoPerfilComponent', () => {
  let component: AgendamentoPerfilComponent;
  let fixture: ComponentFixture<AgendamentoPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendamentoPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
