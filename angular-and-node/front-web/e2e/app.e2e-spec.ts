import { FrontWebPage } from './app.po';

describe('front-web App', function() {
  let page: FrontWebPage;

  beforeEach(() => {
    page = new FrontWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
