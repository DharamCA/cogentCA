import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsocertificateComponent } from './isocertificate.component';

describe('IsocertificateComponent', () => {
  let component: IsocertificateComponent;
  let fixture: ComponentFixture<IsocertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsocertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsocertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
