import { AppState, ActionWithPayload } from '../store/model';
import { Injectable } from '@angular/core';

// Initializing Initital state
export interface CalculatorState {
  total: number;
}


export const INITIAL_STATE: CalculatorState = {
  total: 0
};

// Exporting root reducer, in this case it is our only reducer
export function calculatorReducer(state: CalculatorState = INITIAL_STATE, action: ActionWithPayload): CalculatorState {
  switch(action.type) {
    case CalculatorReduxActions.ADD:
      return {...state, total: state.total += action.payload}
    case CalculatorReduxActions.SUBTRACT:
      return {...state, total: state.total -= action.payload}
  }
  return state;
}

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