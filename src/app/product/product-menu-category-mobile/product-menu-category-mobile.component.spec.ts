import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryMobileComponent } from './product-category-mobile.component';

describe('ProductCategoryMobileComponent', () => {
  let component: ProductCategoryMobileComponent;
  let fixture: ComponentFixture<ProductCategoryMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
