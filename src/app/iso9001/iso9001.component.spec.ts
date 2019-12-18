import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso9001Component } from './iso9001.component';

describe('Iso9001Component', () => {
  let component: Iso9001Component;
  let fixture: ComponentFixture<Iso9001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iso9001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso9001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
