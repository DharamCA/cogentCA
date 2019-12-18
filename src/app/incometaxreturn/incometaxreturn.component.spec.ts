import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncometaxreturnComponent } from './incometaxreturn.component';

describe('IncometaxreturnComponent', () => {
  let component: IncometaxreturnComponent;
  let fixture: ComponentFixture<IncometaxreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncometaxreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncometaxreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
