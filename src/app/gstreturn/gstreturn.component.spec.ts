import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstreturnComponent } from './gstreturn.component';

describe('GstreturnComponent', () => {
  let component: GstreturnComponent;
  let fixture: ComponentFixture<GstreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
