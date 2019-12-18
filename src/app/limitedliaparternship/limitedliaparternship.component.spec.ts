import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedliaparternshipComponent } from './limitedliaparternship.component';

describe('LimitedliaparternshipComponent', () => {
  let component: LimitedliaparternshipComponent;
  let fixture: ComponentFixture<LimitedliaparternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedliaparternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedliaparternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
