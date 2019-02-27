import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoProductosComponent } from './io-productos.component';

describe('IoProductosComponent', () => {
  let component: IoProductosComponent;
  let fixture: ComponentFixture<IoProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
