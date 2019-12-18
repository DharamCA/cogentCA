import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FssairegistrationComponent } from './fssairegistration.component';

describe('FssairegistrationComponent', () => {
  let component: FssairegistrationComponent;
  let fixture: ComponentFixture<FssairegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FssairegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FssairegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
