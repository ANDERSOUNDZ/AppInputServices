import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoCarritoComponent } from './io-carrito.component';

describe('IoCarritoComponent', () => {
  let component: IoCarritoComponent;
  let fixture: ComponentFixture<IoCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
