import {of} from 'rxjs';
import {SearchBoxComponent} from "@shared/components/search-box/search-box.component";


  let mockActivatedRoute: any;
  let mockBooksService: any;


  const testValue = 'test';

  const testData = ['search1', 'search2', 'search3'];

  beforeEach(() => {

    mockActivatedRoute = {
      paramMap: of({
        get: jest.fn((param: string) => 'book_id'),
      } as any),
    };

    mockBooksService = {
      searchBookDetails: jest.fn(),
    };

  });

  describe("Test componente BookDetailsPageComponent", () => {


    it('should emit value and save searched data', () => {
      const component: SearchBoxComponent = new SearchBoxComponent()
      const onValueSpy = jest.spyOn(component.onValue, 'emit');
      const saveSearchedDataSpy = jest.spyOn(component, 'saveSearchedData');
      component.emitValue(testValue);
      expect(onValueSpy).toHaveBeenCalledWith(testValue);
      expect(saveSearchedDataSpy).toHaveBeenCalledWith(testValue);
    });

    it('saveSearchedData updates inputCache and localStorage', () => {

      const component: SearchBoxComponent = new SearchBoxComponent()
      component.saveSearchedData(testValue);
      expect(component.inputCache).toEqual([testValue]);
      expect(component.searchTerm).toBe('');
      const storedData = JSON.parse(localStorage.getItem('searches') || '[]');
      expect(storedData).toEqual([testValue]);
    });

    test('loadStoregedList loads data from localStorage', () => {
      const component: SearchBoxComponent = new SearchBoxComponent()
      localStorage.setItem('searches', JSON.stringify(testData));
      component.loadStoregedList();
      expect(component.inputCache).toEqual(testData.slice(0, 5));
    });


});
