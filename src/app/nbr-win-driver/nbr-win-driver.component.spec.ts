import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrWinDriverComponent } from './nbr-win-driver.component';

describe('NbrWinDriverComponent', () => {
  let component: NbrWinDriverComponent;
  let fixture: ComponentFixture<NbrWinDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbrWinDriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbrWinDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
