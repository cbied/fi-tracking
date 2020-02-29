import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiAnnualActualBudgetContainerComponent } from './fi-annual-actual-budget-container.component';

describe('FiAnnualActualBudgetContainerComponent', () => {
  let component: FiAnnualActualBudgetContainerComponent;
  let fixture: ComponentFixture<FiAnnualActualBudgetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiAnnualActualBudgetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiAnnualActualBudgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
