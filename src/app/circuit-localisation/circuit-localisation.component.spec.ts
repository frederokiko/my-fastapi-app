import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitLocalisationComponent } from './circuit-localisation.component';

describe('CircuitLocalisationComponent', () => {
  let component: CircuitLocalisationComponent;
  let fixture: ComponentFixture<CircuitLocalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircuitLocalisationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
