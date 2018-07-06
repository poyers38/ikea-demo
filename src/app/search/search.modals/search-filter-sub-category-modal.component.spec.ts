import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterSubCategoryModalComponent } from './search-filter-sub-category-modal.component';

describe('SearchFilterSubCategoryModalComponent', () => {
  let component: SearchFilterSubCategoryModalComponent;
  let fixture: ComponentFixture<SearchFilterSubCategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterSubCategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterSubCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
