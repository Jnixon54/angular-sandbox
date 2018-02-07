import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColorMeComponent } from './components/color-me/color-me.component';
import { ScrollMeComponent } from './components/scroll-me/scroll-me.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorReduxComponent } from './components/calculator-redux/calculator-redux.component';
// Redux Imports
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger'; // Redux Logger Middleware
import { rootReducer , AppState, INITIAL_STATE } from '../store';

// Redux Actions - go to components as providers
import { CalculatorReduxActions } from './reducers/calculatorReducer';
import { StoreModule } from './store/store.module';


@NgModule({
  declarations: [
    AppComponent,
    ColorMeComponent,
    ScrollMeComponent,
    CalculatorComponent,
    CalculatorReduxComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    StoreModule
  ],
  providers: [CalculatorReduxActions],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(ngRedux: NgRedux<AppState>) {
  //   ngRedux.configureStore(rootReducer, INITIAL_STATE, [ createLogger() ], DevToolsExtension.isEnabled() ? [ DevToolsExtension.enhancer() ] : []);
  // }
 }

 // Use the @select decorator to access your store state, and .dispatch() to dispatch actions
