import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategorySelectionItemMobileComponent } from './product-category-selection-item-mobile.component';

describe('ProductCategorySelectionItemMobileComponent', () => {
  let component: ProductCategorySelectionItemMobileComponent;
  let fixture: ComponentFixture<ProductCategorySelectionItemMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategorySelectionItemMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategorySelectionItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
