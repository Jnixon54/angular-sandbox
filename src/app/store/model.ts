import { Action } from 'redux';
import { CalculatorState } from '../reducers/calculatorReducer';

export interface ActionWithPayload extends Action { 
  payload?: any // Optional
}

// Defining interface for app state
export interface AppState { 
}

