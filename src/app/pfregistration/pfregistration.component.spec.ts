import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfregistrationComponent } from './pfregistration.component';

describe('PfregistrationComponent', () => {
  let component: PfregistrationComponent;
  let fixture: ComponentFixture<PfregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
