import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTareaPreguntasComponent } from './view-tarea-preguntas.component';

describe('ViewTareaPreguntasComponent', () => {
  let component: ViewTareaPreguntasComponent;
  let fixture: ComponentFixture<ViewTareaPreguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTareaPreguntasComponent]
    });
    fixture = TestBed.createComponent(ViewTareaPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
