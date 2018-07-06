import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterCategoryModalComponent } from './search-filter-category-modal.component';

describe('SearchFilterCategoryModalComponent', () => {
  let component: SearchFilterCategoryModalComponent;
  let fixture: ComponentFixture<SearchFilterCategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterCategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
