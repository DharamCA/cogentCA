import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigisigcertificateComponent } from './digisigcertificate.component';

describe('DigisigcertificateComponent', () => {
  let component: DigisigcertificateComponent;
  let fixture: ComponentFixture<DigisigcertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigisigcertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigisigcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
