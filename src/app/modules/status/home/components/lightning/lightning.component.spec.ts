import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningStatusComponent } from './lightning.component';

describe('LightningStatusComponent', () => {
  let component: LightningStatusComponent;
  let fixture: ComponentFixture<LightningStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightningStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightningStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
