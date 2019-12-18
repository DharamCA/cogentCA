import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso22000Component } from './iso22000.component';

describe('Iso22000Component', () => {
  let component: Iso22000Component;
  let fixture: ComponentFixture<Iso22000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iso22000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso22000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
