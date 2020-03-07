import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-monthly-transaction-investment',
  templateUrl: './monthly-transaction-investment.component.html',
  styleUrls: ['./monthly-transaction-investment.component.scss']
})
export class MonthlyTransactionInvestmentComponent implements OnInit {

  constructor(private ngZone: NgZone) {}

  @ViewChild('autosize', { static: true }) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit() {}

}
