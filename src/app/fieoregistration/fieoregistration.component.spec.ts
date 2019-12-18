import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieoregistrationComponent } from './fieoregistration.component';

describe('FieoregistrationComponent', () => {
  let component: FieoregistrationComponent;
  let fixture: ComponentFixture<FieoregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieoregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieoregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
