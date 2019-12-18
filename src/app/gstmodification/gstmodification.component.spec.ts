import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstmodificationComponent } from './gstmodification.component';

describe('GstmodificationComponent', () => {
  let component: GstmodificationComponent;
  let fixture: ComponentFixture<GstmodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstmodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstmodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
