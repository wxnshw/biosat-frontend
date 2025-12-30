import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAgendaComponent } from './mini-agenda.component';

describe('MiniAgendaComponent', () => {
  let component: MiniAgendaComponent;
  let fixture: ComponentFixture<MiniAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniAgendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
