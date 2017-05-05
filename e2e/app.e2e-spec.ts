import { AmzFrontEndPage } from './app.po';

describe('amz-front-end App', () => {
  let page: AmzFrontEndPage;

  beforeEach(() => {
    page = new AmzFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
