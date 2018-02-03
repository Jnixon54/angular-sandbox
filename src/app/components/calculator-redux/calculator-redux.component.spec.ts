import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorReduxComponent } from './calculator-redux.component';

describe('CalculatorReduxComponent', () => {
  let component: CalculatorReduxComponent;
  let fixture: ComponentFixture<CalculatorReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
