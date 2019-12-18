import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsmeregistrationComponent } from './msmeregistration.component';

describe('MsmeregistrationComponent', () => {
  let component: MsmeregistrationComponent;
  let fixture: ComponentFixture<MsmeregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsmeregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsmeregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
