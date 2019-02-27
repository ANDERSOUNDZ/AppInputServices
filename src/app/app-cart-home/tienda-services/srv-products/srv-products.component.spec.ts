import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvProductsComponent } from './srv-products.component';

describe('SrvProductsComponent', () => {
  let component: SrvProductsComponent;
  let fixture: ComponentFixture<SrvProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrvProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
