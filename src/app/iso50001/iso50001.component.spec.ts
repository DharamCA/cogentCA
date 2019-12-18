import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso50001Component } from './iso50001.component';

describe('Iso50001Component', () => {
  let component: Iso50001Component;
  let fixture: ComponentFixture<Iso50001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iso50001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso50001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
