import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTablesComponent } from './expense-tables.component';

describe('ExpenseTablesComponent', () => {
  let component: ExpenseTablesComponent;
  let fixture: ComponentFixture<ExpenseTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
