import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollMeComponent } from './scroll-me.component';

describe('ScrollMeComponent', () => {
  let component: ScrollMeComponent;
  let fixture: ComponentFixture<ScrollMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
