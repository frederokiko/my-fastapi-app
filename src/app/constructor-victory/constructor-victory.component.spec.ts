import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorVictoryComponent } from './constructor-victory.component';

describe('ConstructorVictoryComponent', () => {
  let component: ConstructorVictoryComponent;
  let fixture: ComponentFixture<ConstructorVictoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructorVictoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorVictoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
