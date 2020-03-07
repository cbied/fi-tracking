import { InputTableComponent } from './input-table/input-table.component';
import { NgModule } from '@angular/core';
import { MonthlyTransactionInputComponent } from './transaction/monthly-transaction-input/monthly-transaction-input.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { MonthlyTransactionExpenseComponent } from './transaction/monthly-transaction-expense/monthly-transaction-expense.component';
import { MonthlyTransactionIncomeComponent } from './transaction/monthly-transaction-income/monthly-transaction-income.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MonthlyTransactionInvestmentComponent } from './transaction/monthly-transaction-investment/monthly-transaction-investment.component';
import { IncomeTablesComponent } from './annual-projected-tables/income-tables/income-tables.component';
import { InvestmentTablesComponent } from './annual-projected-tables/investment-tables/investment-tables.component';
import { ExpenseTablesComponent } from './annual-projected-tables/expense-tables/expense-tables.component';

@NgModule({
  declarations: [
    InputTableComponent,
    MonthlyTransactionInputComponent,
    MonthlyTransactionExpenseComponent,
    MonthlyTransactionIncomeComponent,
    MonthlyTransactionInvestmentComponent,
    IncomeTablesComponent,
    InvestmentTablesComponent,
    ExpenseTablesComponent
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
