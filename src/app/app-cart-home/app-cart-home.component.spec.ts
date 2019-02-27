import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCartHomeComponent } from './app-cart-home.component';

describe('AppCartHomeComponent', () => {
  let component: AppCartHomeComponent;
  let fixture: ComponentFixture<AppCartHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCartHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
