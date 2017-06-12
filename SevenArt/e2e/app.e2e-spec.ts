import { SevenArtPage } from './app.po';

describe('seven-art App', () => {
  let page: SevenArtPage;

  beforeEach(() => {
    page = new SevenArtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
