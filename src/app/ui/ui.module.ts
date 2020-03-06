import { InputTableComponent } from './input-table/input-table.component';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [InputTableComponent],
  imports: [MatTableModule],
  providers: [],
  bootstrap: [],
  exports: [InputTableComponent]
})
export class UiModule { }
