import { Injectable } from '@angular/core';
import { ActionWithPayload } from '../../store';

@Injectable() // Allows us to inject as a provider
export class CalculatorReduxActions {
  static ADD = 'ADD';
  static SUBTRACT = 'SUBTRACT';

  add(value: number): ActionWithPayload {
    return {
      type: CalculatorReduxActions.ADD,
      payload: value
    }
  }

  subtract(value: number): ActionWithPayload {
    return {
      type: CalculatorReduxActions.SUBTRACT,
      payload: value
    }
  }
}