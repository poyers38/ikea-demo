import { MenubarMobileModule } from './menubar-mobile.module';

describe('MenubarMobileModule', () => {
  let menubarMobileModule: MenubarMobileModule;

  beforeEach(() => {
    menubarMobileModule = new MenubarMobileModule();
  });

  it('should create an instance', () => {
    expect(menubarMobileModule).toBeTruthy();
  });
});
