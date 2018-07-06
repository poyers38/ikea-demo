import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterMobileComponent } from './search-filter-mobile.component';

describe('SearchFilterMobileComponent', () => {
  let component: SearchFilterMobileComponent;
  let fixture: ComponentFixture<SearchFilterMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
