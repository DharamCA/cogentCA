import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogodesignComponent } from './logodesign.component';

describe('LogodesignComponent', () => {
  let component: LogodesignComponent;
  let fixture: ComponentFixture<LogodesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogodesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogodesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
