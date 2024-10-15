import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrCourseCircuitComponent } from './nbr-course-circuit.component';

describe('NbrCourseCircuitComponent', () => {
  let component: NbrCourseCircuitComponent;
  let fixture: ComponentFixture<NbrCourseCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbrCourseCircuitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbrCourseCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
