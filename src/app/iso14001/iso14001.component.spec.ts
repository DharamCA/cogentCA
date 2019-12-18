import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso14001Component } from './iso14001.component';

describe('Iso14001Component', () => {
  let component: Iso14001Component;
  let fixture: ComponentFixture<Iso14001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iso14001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso14001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
