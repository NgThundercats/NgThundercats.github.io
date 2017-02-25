import { NgthundercatsPage } from './app.po';

describe('ngthundercats App', function() {
  let page: NgthundercatsPage;

  beforeEach(() => {
    page = new NgthundercatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
