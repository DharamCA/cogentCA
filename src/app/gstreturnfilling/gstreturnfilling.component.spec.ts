import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstreturnfillingComponent } from './gstreturnfilling.component';

describe('GstreturnfillingComponent', () => {
  let component: GstreturnfillingComponent;
  let fixture: ComponentFixture<GstreturnfillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstreturnfillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstreturnfillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
