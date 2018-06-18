import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMobileComponent } from './shop-mobile.component';

describe('ShopMobileComponent', () => {
  let component: ShopMobileComponent;
  let fixture: ComponentFixture<ShopMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
