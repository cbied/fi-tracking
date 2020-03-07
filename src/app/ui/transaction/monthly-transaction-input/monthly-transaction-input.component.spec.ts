import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTransactionInputComponent } from './monthly-transaction-input.component';

describe('MonthlyTransactionInputComponent', () => {
  let component: MonthlyTransactionInputComponent;
  let fixture: ComponentFixture<MonthlyTransactionInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyTransactionInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyTransactionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
