import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterColorModalComponent } from './search-filter-color-modal.component';

describe('SearchFilterColorModalComponent', () => {
  let component: SearchFilterColorModalComponent;
  let fixture: ComponentFixture<SearchFilterColorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterColorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterColorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
