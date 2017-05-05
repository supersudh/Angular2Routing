import { RoutingPracticePage } from './app.po';

describe('routing-practice App', () => {
  let page: RoutingPracticePage;

  beforeEach(() => {
    page = new RoutingPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
