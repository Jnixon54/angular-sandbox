import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  total: number = 0;
  input: number = 0;
  constructor() { }

  pushValue(value:string) {
    this.input = +value;
  }

  addValue(value:string) {
    this.total += +value;
  }

  subValue(value:string) {
    this.total -= +value;
  }

  ngOnInit() {
  }

}
