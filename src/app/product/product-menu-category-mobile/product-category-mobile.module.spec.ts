import { ProductCategoryMobileModule } from './product-category-mobile.module';

describe('ProductCategoryMobileModule', () => {
  let productCategoryMobileModule: ProductCategoryMobileModule;

  beforeEach(() => {
    productCategoryMobileModule = new ProductCategoryMobileModule();
  });

  it('should create an instance', () => {
    expect(productCategoryMobileModule).toBeTruthy();
  });
});
