import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaServicesComponent } from './tienda-services.component';

describe('TiendaServicesComponent', () => {
  let component: TiendaServicesComponent;
  let fixture: ComponentFixture<TiendaServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
