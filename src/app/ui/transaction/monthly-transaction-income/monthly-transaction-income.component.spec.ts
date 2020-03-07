import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTransactionIncomeComponent } from './monthly-transaction-income.component';

describe('MonthlyTransactionIncomeComponent', () => {
  let component: MonthlyTransactionIncomeComponent;
  let fixture: ComponentFixture<MonthlyTransactionIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyTransactionIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyTransactionIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
