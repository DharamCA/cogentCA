import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApedaregistrationComponent } from './apedaregistration.component';

describe('ApedaregistrationComponent', () => {
  let component: ApedaregistrationComponent;
  let fixture: ComponentFixture<ApedaregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApedaregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApedaregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
