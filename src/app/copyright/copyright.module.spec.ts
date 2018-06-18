import { CopyrightModule } from './copyright.module';

describe('CopyrightModule', () => {
  let copyrightModule: CopyrightModule;

  beforeEach(() => {
    copyrightModule = new CopyrightModule();
  });

  it('should create an instance', () => {
    expect(copyrightModule).toBeTruthy();
  });
});
