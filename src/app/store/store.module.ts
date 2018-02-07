import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppState } from './model';
import { rootReducer } from './reducers';
import { createLogger } from 'redux-logger';


@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: []
})
export class StoreModule { 
  constructor(
    public store: NgRedux<AppState>,
    devTools: DevToolsExtension
  ) { // Linking reducers, epics go here as well
    store.configureStore(
      rootReducer,
      {},
      [ createLogger() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : [])
  }
}
