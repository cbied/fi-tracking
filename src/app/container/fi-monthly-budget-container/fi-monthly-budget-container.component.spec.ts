import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiMonthlyBudgetContainerComponent } from './fi-monthly-budget-container.component';

describe('FiMonthlyBudgetContainerComponent', () => {
  let component: FiMonthlyBudgetContainerComponent;
  let fixture: ComponentFixture<FiMonthlyBudgetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiMonthlyBudgetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiMonthlyBudgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
