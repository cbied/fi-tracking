import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiTransactionContainerComponent } from './fi-transaction-container.component';

describe('FiTransactionContainerComponent', () => {
  let component: FiTransactionContainerComponent;
  let fixture: ComponentFixture<FiTransactionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiTransactionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiTransactionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
