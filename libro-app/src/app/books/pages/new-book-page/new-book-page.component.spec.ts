import {NewBookPageComponent} from "./new-book-page.component";

  let component: NewBookPageComponent;
  let booksServiceMock: any;

  beforeEach(() => {

    booksServiceMock = {
      searchBooksNew: jest.fn(() => {
        return { subscribe: (callback: any) => callback({ books: ['book1', 'book2'] }) };
      }),
    };

    component = new NewBookPageComponent(booksServiceMock);
  });

  describe('NewBookPageComponent', () => {

  it('should call searchBooksNew and update books array', (done) => {
    component.searchBookNew();
    expect(booksServiceMock.searchBooksNew).toHaveBeenCalled();
    setTimeout(() => {
      expect(component.books).toEqual(['book1', 'book2']);
      done();
    });
  });

    it('should update books array if result has items', () => {
      const testData = { result: ['book1', 'book2'] };
      component.onChangesData(testData);
      expect(component.books).toEqual(['book1', 'book2']);
    });

    it('should call searchBookNew if result is empty', () => {
      const testData = { result: [] };
      const searchBookNewSpy = jest.spyOn(component, 'searchBookNew');
      component.onChangesData(testData);
      expect(searchBookNewSpy).toHaveBeenCalled();
    });

    it('should call searchBookNew when eventEmitter is invoked', () => {
      const searchBookNewSpy = jest.spyOn(component, 'searchBookNew');
      component.eventEmitter();
      expect(searchBookNewSpy).toHaveBeenCalled();
    });

    it('should call searchBookNew when eventEmitter is invoked', () => {
      const searchBookNewSpy = jest.spyOn(component, 'searchBookNew');
      component.eventEmitter();
      expect(searchBookNewSpy).toHaveBeenCalled();
    })
    it('should call searchBookNew when ngOnInit is invoked', () => {
      const searchBookNewSpy = jest.spyOn(component, 'searchBookNew');
      component.ngOnInit();
      expect(searchBookNewSpy).toHaveBeenCalled();
    })

});
