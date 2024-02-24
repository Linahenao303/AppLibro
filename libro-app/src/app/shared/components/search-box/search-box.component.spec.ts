import {SearchBoxComponent} from "@shared/components/search-box/search-box.component";



  const value = 'TestValue';

beforeEach(() => {
  jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
  });


  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("Test componente HomologacionCartera", () => {

    it('should emit value and save searched data', () => {
      const  component: SearchBoxComponent = new SearchBoxComponent()
      const emitSpy = jest.spyOn(component.onValue, 'emit');
      const saveSearchedDataSpy = jest.spyOn(component, 'saveSearchedData')
      component.emitValue(value);
      expect(emitSpy).toHaveBeenCalledWith(value);
      expect(saveSearchedDataSpy).toHaveBeenCalledWith(value);
    });

    it('should save searched data correctly', () => {
      const component: SearchBoxComponent = new SearchBoxComponent();
      const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
      component.saveSearchedData(value);
      expect(component.inputCache).toEqual([value]);
      expect(component.searchTerm).toBe('');
      expect(setItemSpy).toHaveBeenCalledWith('searches', JSON.stringify([value]));
      setItemSpy.mockRestore();
    });


    it('should handle case when searches is null', () => {
      const component: SearchBoxComponent = new SearchBoxComponent();
      component.loadStoregedList();
      expect(component.inputCache).toEqual([]);
    });

    it('should  call the loadStoregedList method in ngOnInit', () => {
      const component: SearchBoxComponent = new SearchBoxComponent();
      const loadStoregedListSpy = jest.spyOn(component, 'loadStoregedList');
      component.ngOnInit();
      expect(loadStoregedListSpy).toHaveBeenCalled();

    });



});



