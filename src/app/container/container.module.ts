import { NgModule } from '@angular/core';
import { FiAnnualProjectedBudgetContainerComponent } from './fi-annual-projected-budget-container/fi-annual-projected-budget-container.component';
import { FiAnnualActualBudgetContainerComponent } from './fi-annual-actual-budget-container/fi-annual-actual-budget-container.component';
import { FiMonthlyBudgetContainerComponent } from './fi-monthly-budget-container/fi-monthly-budget-container.component';
import { FiTransactionContainerComponent } from './fi-transaction-container/fi-transaction-container.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [
    FiAnnualProjectedBudgetContainerComponent,
    FiAnnualActualBudgetContainerComponent,
    FiMonthlyBudgetContainerComponent,
    FiTransactionContainerComponent
  ],
  imports: [MatGridListModule, UiModule],
  providers: [],
  bootstrap: [],
  exports: [
    FiAnnualProjectedBudgetContainerComponent,
    FiAnnualActualBudgetContainerComponent,
    FiMonthlyBudgetContainerComponent,
    FiTransactionContainerComponent]
})
export class ContainerModule { }
