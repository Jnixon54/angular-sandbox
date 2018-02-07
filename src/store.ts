import { Action, StoreEnhancer } from 'redux';
import { CalculatorReduxActions } from './app/redux/calculator-redux.actions';

// Defining devtools middleware
// export const devtools: StoreEnhancer<AppState> =
//   window['devToolsExtension'] ?
//   window['devToolsExtension']() : f => f;

// Extend Action Interface to include payload
export interface ActionWithPayload extends Action { 
  payload?: any // Optional
}

// Defining interface for app state
export interface AppState { 
  total: number;
}

// Initializing Initital state
export const INITIAL_STATE: AppState = {
  total: 0
};

// Exporting root reducer, in this case it is our only reducer
export function rootReducer(state: AppState, action: ActionWithPayload): AppState {
  switch(action.type) {
    case CalculatorReduxActions.ADD:
      return {...state, total: state.total += action.payload}
    case CalculatorReduxActions.SUBTRACT:
      return {...state, total: state.total -= action.payload}
  }
  return state;
}