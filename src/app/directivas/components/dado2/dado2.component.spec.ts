import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dado2Component } from './dado2.component';

describe('Dado2Component', () => {
  let component: Dado2Component;
  let fixture: ComponentFixture<Dado2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dado2Component]
    });
    fixture = TestBed.createComponent(Dado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
