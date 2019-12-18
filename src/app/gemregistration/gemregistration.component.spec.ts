import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemregistrationComponent } from './gemregistration.component';

describe('GemregistrationComponent', () => {
  let component: GemregistrationComponent;
  let fixture: ComponentFixture<GemregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
