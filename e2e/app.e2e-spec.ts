import { CarsearchPage } from './app.po';

describe('carsearch App', () => {
  let page: CarsearchPage;

  beforeEach(() => {
    page = new CarsearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
