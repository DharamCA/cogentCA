import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsicregistrationComponent } from './nsicregistration.component';

describe('NsicregistrationComponent', () => {
  let component: NsicregistrationComponent;
  let fixture: ComponentFixture<NsicregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsicregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsicregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
