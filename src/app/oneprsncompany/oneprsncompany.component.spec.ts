import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneprsncompanyComponent } from './oneprsncompany.component';

describe('OneprsncompanyComponent', () => {
  let component: OneprsncompanyComponent;
  let fixture: ComponentFixture<OneprsncompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneprsncompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneprsncompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
