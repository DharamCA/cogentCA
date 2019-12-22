import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessvaluationComponent } from './businessvaluation.component';

describe('BusinessvaluationComponent', () => {
  let component: BusinessvaluationComponent;
  let fixture: ComponentFixture<BusinessvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
