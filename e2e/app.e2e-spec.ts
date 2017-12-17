import { IntervYouUIPage } from './app.po';

describe('interv-you-ui App', () => {
  let page: IntervYouUIPage;

  beforeEach(() => {
    page = new IntervYouUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
