import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAnneeComponent } from './detail-annee.component';

describe('DetailAnneeComponent', () => {
  let component: DetailAnneeComponent;
  let fixture: ComponentFixture<DetailAnneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailAnneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
