import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.scss']
})
export class TipCalculatorComponent implements OnInit {

  checkAmt = 0;
  tipPercent = 0;

  get checkTotal() {
    return this.checkAmt + this.checkAmt * this.tipPercent / 100;
  }

  constructor() { }

  ngOnInit() {
  }

  setTip(tipPct: number) {
    this.tipPercent = tipPct;
  }

  updateCheckAmt(evt) {
    this.checkAmt = +evt.currentTarget.value;
  }
}
