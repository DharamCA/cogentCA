import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessplanprojectreportComponent } from './businessplanprojectreport.component';

describe('BusinessplanprojectreportComponent', () => {
  let component: BusinessplanprojectreportComponent;
  let fixture: ComponentFixture<BusinessplanprojectreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessplanprojectreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessplanprojectreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
