import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPointsChartComponent } from './driver-points-chart.component';

describe('DriverPointsChartComponent', () => {
  let component: DriverPointsChartComponent;
  let fixture: ComponentFixture<DriverPointsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverPointsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverPointsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
