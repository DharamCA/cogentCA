import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignregistrationComponent } from './designregistration.component';

describe('DesignregistrationComponent', () => {
  let component: DesignregistrationComponent;
  let fixture: ComponentFixture<DesignregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
