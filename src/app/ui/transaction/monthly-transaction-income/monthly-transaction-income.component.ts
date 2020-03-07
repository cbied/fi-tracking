import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-monthly-transaction-income',
  templateUrl: './monthly-transaction-income.component.html',
  styleUrls: ['./monthly-transaction-income.component.scss']
})
export class MonthlyTransactionIncomeComponent implements OnInit {

  constructor(private ngZone: NgZone) {}

  @ViewChild('autosize', { static: true }) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit() {}


}
