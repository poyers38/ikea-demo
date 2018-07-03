import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPopItemComponent } from './search-pop-item.component';

describe('SearchPopItemComponent', () => {
  let component: SearchPopItemComponent;
  let fixture: ComponentFixture<SearchPopItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPopItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
