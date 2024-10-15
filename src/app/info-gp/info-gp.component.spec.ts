import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGpComponent } from './info-gp.component';

describe('InfoGpComponent', () => {
  let component: InfoGpComponent;
  let fixture: ComponentFixture<InfoGpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoGpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
