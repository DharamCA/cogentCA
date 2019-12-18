import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso27001Component } from './iso27001.component';

describe('Iso27001Component', () => {
  let component: Iso27001Component;
  let fixture: ComponentFixture<Iso27001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iso27001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso27001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
