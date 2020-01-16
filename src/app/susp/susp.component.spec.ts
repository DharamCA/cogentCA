import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspComponent } from './susp.component';

describe('SuspComponent', () => {
  let component: SuspComponent;
  let fixture: ComponentFixture<SuspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
