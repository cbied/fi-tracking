import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentTablesComponent } from './investment-tables.component';

describe('InvestmentTablesComponent', () => {
  let component: InvestmentTablesComponent;
  let fixture: ComponentFixture<InvestmentTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
