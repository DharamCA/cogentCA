import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopregistrationComponent } from './shopregistration.component';

describe('ShopregistrationComponent', () => {
  let component: ShopregistrationComponent;
  let fixture: ComponentFixture<ShopregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
