import { HeaderMobileModule } from './header-mobile.module';

describe('HeaderMobileModule', () => {
  let headerMobileModule: HeaderMobileModule;

  beforeEach(() => {
    headerMobileModule = new HeaderMobileModule();
  });

  it('should create an instance', () => {
    expect(headerMobileModule).toBeTruthy();
  });
});
