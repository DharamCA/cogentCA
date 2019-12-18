import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubltdcompanyComponent } from './publtdcompany.component';

describe('PubltdcompanyComponent', () => {
  let component: PubltdcompanyComponent;
  let fixture: ComponentFixture<PubltdcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubltdcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubltdcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
