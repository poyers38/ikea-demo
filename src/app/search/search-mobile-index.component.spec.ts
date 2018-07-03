import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMobileIndexComponent } from './search-mobile-index.component';

describe('SearchMobileIndexComponent', () => {
  let component: SearchMobileIndexComponent;
  let fixture: ComponentFixture<SearchMobileIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMobileIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMobileIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
