import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReraregistrationComponent } from './reraregistration.component';

describe('ReraregistrationComponent', () => {
  let component: ReraregistrationComponent;
  let fixture: ComponentFixture<ReraregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReraregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReraregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
