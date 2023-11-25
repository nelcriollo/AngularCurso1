import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivangModelComponent } from './directivang-model.component';

describe('DirectivangModelComponent', () => {
  let component: DirectivangModelComponent;
  let fixture: ComponentFixture<DirectivangModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivangModelComponent]
    });
    fixture = TestBed.createComponent(DirectivangModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
