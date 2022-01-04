import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S7TestComponent } from './s7-test.component';

describe('S7TestComponent', () => {
  let component: S7TestComponent;
  let fixture: ComponentFixture<S7TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S7TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S7TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
