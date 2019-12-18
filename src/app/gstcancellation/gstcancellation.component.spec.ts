import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstcancellationComponent } from './gstcancellation.component';

describe('GstcancellationComponent', () => {
  let component: GstcancellationComponent;
  let fixture: ComponentFixture<GstcancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstcancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstcancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
