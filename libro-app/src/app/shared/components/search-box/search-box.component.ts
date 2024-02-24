import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  public inputCache: string[] = [];

  public searchTerm = '';

  ngOnInit(): void {
    this.loadStoregedList();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
    this.saveSearchedData(value);
  }

  saveSearchedData(value: string) {
    this.inputCache.unshift(value);
    this.inputCache = this.inputCache.slice(0, 5);
    this.searchTerm = '';
    localStorage.setItem('searches', JSON.stringify(this.inputCache));
  }

  loadStoregedList() {
    const storedSearches = localStorage.getItem('searches');
    if (storedSearches) {
      this.inputCache = JSON.parse(storedSearches).slice(0, 5);
    }
  }


}
