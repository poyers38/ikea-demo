import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSidebarMobileComponent } from './product-sidebar-mobile.component';

describe('ProductSidebarMobileComponent', () => {
  let component: ProductSidebarMobileComponent;
  let fixture: ComponentFixture<ProductSidebarMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSidebarMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSidebarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
