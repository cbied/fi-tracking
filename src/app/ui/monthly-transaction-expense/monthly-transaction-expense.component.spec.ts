import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTransactionExpenseComponent } from './monthly-transaction-expense.component';

describe('MonthlyTransactionExpenseComponent', () => {
  let component: MonthlyTransactionExpenseComponent;
  let fixture: ComponentFixture<MonthlyTransactionExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyTransactionExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyTransactionExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
