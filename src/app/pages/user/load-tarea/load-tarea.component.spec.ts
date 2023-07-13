import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTareaComponent } from './load-tarea.component';

describe('LoadTareaComponent', () => {
  let component: LoadTareaComponent;
  let fixture: ComponentFixture<LoadTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadTareaComponent]
    });
    fixture = TestBed.createComponent(LoadTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
