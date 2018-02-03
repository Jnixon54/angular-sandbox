import { Action } from 'redux';
import { CalculatorReduxActions } from './app/redux/calculator-redux.actions';

// Extend Action Interface to include payload
export interface ActionWithPayload extends Action { 
  payload?: any // Optional
}

// Defining interface for app state
export interface IAppState { 
  total: number;
}

// Initializing Initital state
export const INITIAL_STATE: IAppState = {
  total: 0
};

// Exporting root reducer, in this case it is our only reducer
export function rootReducer(state: IAppState, action: ActionWithPayload): IAppState {
  switch(action.type) {
    case CalculatorReduxActions.ADD:
      return {...state, total: state.total += action.payload}
    case CalculatorReduxActions.SUBTRACT:
      return {...state, total: state.total -= action.payload}
  }

  return state;
}