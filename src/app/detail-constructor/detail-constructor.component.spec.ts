import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConstructorComponent } from './detail-constructor.component';

describe('DetailConstructorComponent', () => {
  let component: DetailConstructorComponent;
  let fixture: ComponentFixture<DetailConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailConstructorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
