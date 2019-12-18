import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParternshipfirmComponent } from './parternshipfirm.component';

describe('ParternshipfirmComponent', () => {
  let component: ParternshipfirmComponent;
  let fixture: ComponentFixture<ParternshipfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParternshipfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParternshipfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
