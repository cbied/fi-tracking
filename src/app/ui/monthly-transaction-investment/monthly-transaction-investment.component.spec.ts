import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTransactionInvestmentComponent } from './monthly-transaction-investment.component';

describe('MonthlyTransactionInvestmentComponent', () => {
  let component: MonthlyTransactionInvestmentComponent;
  let fixture: ComponentFixture<MonthlyTransactionInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyTransactionInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyTransactionInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
