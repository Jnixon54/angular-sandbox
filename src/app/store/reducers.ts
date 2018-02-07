import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { combineReducers } from 'redux';

import { calculatorReducer } from '../reducers/calculatorReducer';

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    calculator: calculatorReducer
  })
);