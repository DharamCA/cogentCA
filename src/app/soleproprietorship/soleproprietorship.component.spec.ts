import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleproprietorshipComponent } from './soleproprietorship.component';

describe('SoleproprietorshipComponent', () => {
  let component: SoleproprietorshipComponent;
  let fixture: ComponentFixture<SoleproprietorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoleproprietorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleproprietorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
