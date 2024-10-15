import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolePositionAnneeComponent } from './pole-position-annee.component';

describe('PolePositionAnneeComponent', () => {
  let component: PolePositionAnneeComponent;
  let fixture: ComponentFixture<PolePositionAnneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolePositionAnneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolePositionAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
