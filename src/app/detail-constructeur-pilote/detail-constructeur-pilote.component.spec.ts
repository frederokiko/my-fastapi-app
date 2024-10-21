import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConstructeurPiloteComponent } from './detail-constructeur-pilote.component';

describe('DetailConstructeurPiloteComponent', () => {
  let component: DetailConstructeurPiloteComponent;
  let fixture: ComponentFixture<DetailConstructeurPiloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailConstructeurPiloteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailConstructeurPiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
