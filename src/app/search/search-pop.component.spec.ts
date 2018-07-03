import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPopComponent } from './search-pop.component';

describe('SearchPopComponent', () => {
  let component: SearchPopComponent;
  let fixture: ComponentFixture<SearchPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
