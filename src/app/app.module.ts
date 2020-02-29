import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FiAnnualProjectedBudgetContainerComponent } from './container/fi-annual-projected-budget-container/fi-annual-projected-budget-container.component';
import { FiAnnualActualBudgetContainerComponent } from './container/fi-annual-actual-budget-container/fi-annual-actual-budget-container.component';
import { FiMonthlyBudgetContainerComponent } from './container/fi-monthly-budget-container/fi-monthly-budget-container.component';
import { FiTransactionContainerComponent } from './container/fi-transaction-container/fi-transaction-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FiAnnualProjectedBudgetContainerComponent,
    FiAnnualActualBudgetContainerComponent,
    FiMonthlyBudgetContainerComponent,
    FiTransactionContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
