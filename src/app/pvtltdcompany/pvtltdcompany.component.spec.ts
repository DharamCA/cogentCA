import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvtltdcompanyComponent } from './pvtltdcompany.component';

describe('PvtltdcompanyComponent', () => {
  let component: PvtltdcompanyComponent;
  let fixture: ComponentFixture<PvtltdcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvtltdcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvtltdcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
