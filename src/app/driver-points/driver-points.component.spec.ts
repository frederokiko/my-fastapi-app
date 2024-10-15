import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPointsComponent } from './driver-points.component';

describe('DriverPointsComponent', () => {
  let component: DriverPointsComponent;
  let fixture: ComponentFixture<DriverPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverPointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
