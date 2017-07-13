import { ColorToolPage } from './app.po';

describe('color-tool App', () => {
  let page: ColorToolPage;

  beforeEach(() => {
    page = new ColorToolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
