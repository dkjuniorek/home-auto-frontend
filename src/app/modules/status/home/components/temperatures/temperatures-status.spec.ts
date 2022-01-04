import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturesStatusComponent } from './temperatures-status.component';

describe('TemperaturesStatusComponent', () => {
  let component: TemperaturesStatusComponent;
  let fixture: ComponentFixture<TemperaturesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperaturesStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
