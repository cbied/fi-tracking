import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTablesComponent } from './income-tables.component';

describe('IncomeTablesComponent', () => {
  let component: IncomeTablesComponent;
  let fixture: ComponentFixture<IncomeTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
