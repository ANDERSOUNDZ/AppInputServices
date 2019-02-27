import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaInputOutputComponent } from './tienda-input-output.component';

describe('TiendaInputOutputComponent', () => {
  let component: TiendaInputOutputComponent;
  let fixture: ComponentFixture<TiendaInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
