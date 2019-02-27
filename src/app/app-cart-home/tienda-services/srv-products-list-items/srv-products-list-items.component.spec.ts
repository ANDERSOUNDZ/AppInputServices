import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvProductsListItemsComponent } from './srv-products-list-items.component';

describe('SrvProductsListItemsComponent', () => {
  let component: SrvProductsListItemsComponent;
  let fixture: ComponentFixture<SrvProductsListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrvProductsListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvProductsListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
