import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonAnneeComponent } from './abandon-annee.component';

describe('AbandonAnneeComponent', () => {
  let component: AbandonAnneeComponent;
  let fixture: ComponentFixture<AbandonAnneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbandonAnneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbandonAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
