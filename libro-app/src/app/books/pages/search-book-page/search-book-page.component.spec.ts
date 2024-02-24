import {SearchBookPageComponent} from "./search-book-page.component";


let component: SearchBookPageComponent;
  let booksServiceMock: any;

  beforeEach(() => {

    booksServiceMock = {
      searchBooks: jest.fn(() => {
        return { subscribe: (callback: any) => callback({ books: ['book1', 'book2'] }) };
      }),
    };

    component = new SearchBookPageComponent(booksServiceMock);
  });

  describe('SearchBookPageComponent', () => {

  it('should call searchBooks and update books array when searchBook is invoked', (done) => {
    const searchTerm = 'test';
    component.searchBook(searchTerm);
    expect(booksServiceMock.searchBooks).toHaveBeenCalledWith(searchTerm);
    setTimeout(() => {
      expect(component.books).toEqual(['book1', 'book2']);
      done();
    });

  });

    it('should set showAlert to true after a delay when books array is empty', (done) => {
      jest.useFakeTimers();
      component.showAlertBook();
      expect(component.ShowAlert).toBe(false);
      jest.advanceTimersByTime(1000);
      expect(component.ShowAlert).toBe(true);
      jest.useRealTimers();
      done();
    });

});
