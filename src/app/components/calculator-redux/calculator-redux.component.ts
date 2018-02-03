import { Component, OnInit} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../../store';
import { CalculatorReduxActions } from '../../redux/calculator-redux.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-calculator-redux',
  templateUrl: './calculator-redux.component.html',
  styleUrls: ['./calculator-redux.component.css']
})

export class CalculatorReduxComponent implements OnInit {
  // readonly total$: Observable<number>; // Defining total from state observable as readonly
  @select() readonly total$: Observable<number>; // Defining total, pulls state slice using var name
  input: number = 0;
  // subscription;
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CalculatorReduxActions) { 
      // this.total$ = ngRedux.select<number>('total'); // select slice of state to subscribe to
      // this.subscription = ngRedux.select<number>('total')
        // .subscribe(newTotal => this.total = newTotal);
  }

  pushValue(value:string) {
    this.input = +value;
  }

  addValue(value:string) {
    this.ngRedux.dispatch(this.actions.add(+value)); // dispatching action to reducer
  }

  subValue(value:string) {
    this.ngRedux.dispatch(this.actions.subtract(+value));
  }

  ngOnInit() {
  }

  // Subscribe and unsubscribe are automatically handled by async pipe
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

}
