import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPiloteComponent } from './detail-pilote.component';

describe('DetailPiloteComponent', () => {
  let component: DetailPiloteComponent;
  let fixture: ComponentFixture<DetailPiloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPiloteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
