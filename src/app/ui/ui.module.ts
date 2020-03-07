import { InputTableComponent } from './input-table/input-table.component';
import { NgModule } from '@angular/core';
import { MonthlyTransactionInputComponent } from './monthly-transaction-input/monthly-transaction-input.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { MonthlyTransactionExpenseComponent } from './monthly-transaction-expense/monthly-transaction-expense.component';
import { MonthlyTransactionIncomeComponent } from './monthly-transaction-income/monthly-transaction-income.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MonthlyTransactionInvestmentComponent } from './monthly-transaction-investment/monthly-transaction-investment.component';

@NgModule({
  declarations: [
    InputTableComponent,
    MonthlyTransactionInputComponent,
    MonthlyTransactionExpenseComponent,
    MonthlyTransactionIncomeComponent,
    MonthlyTransactionInvestmentComponent
  ],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTabsModule,
    TextFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    InputTableComponent,
    MonthlyTransactionInputComponent
  ]
})
export class UiModule { }
