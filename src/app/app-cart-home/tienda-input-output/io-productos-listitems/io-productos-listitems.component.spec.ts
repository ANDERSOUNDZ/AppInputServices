import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoProductosListitemsComponent } from './io-productos-listitems.component';

describe('IoProductosListitemsComponent', () => {
  let component: IoProductosListitemsComponent;
  let fixture: ComponentFixture<IoProductosListitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoProductosListitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoProductosListitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
