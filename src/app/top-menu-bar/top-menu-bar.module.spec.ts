import { TopMenuBarModule } from './top-menu-bar.module';

describe('TopMenuBarModule', () => {
  let topMenuBarModule: TopMenuBarModule;

  beforeEach(() => {
    topMenuBarModule = new TopMenuBarModule();
  });

  it('should create an instance', () => {
    expect(topMenuBarModule).toBeTruthy();
  });
});
