import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcoderegistrationComponent } from './barcoderegistration.component';

describe('BarcoderegistrationComponent', () => {
  let component: BarcoderegistrationComponent;
  let fixture: ComponentFixture<BarcoderegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcoderegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcoderegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
