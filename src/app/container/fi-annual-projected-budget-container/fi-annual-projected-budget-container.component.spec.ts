import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiAnnualProjectedBudgetContainerComponent } from './fi-annual-projected-budget-container.component';

describe('FiAnnualProjectedBudgetContainerComponent', () => {
  let component: FiAnnualProjectedBudgetContainerComponent;
  let fixture: ComponentFixture<FiAnnualProjectedBudgetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiAnnualProjectedBudgetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiAnnualProjectedBudgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
