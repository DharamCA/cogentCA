import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssbComponent } from './issb.component';

describe('IssbComponent', () => {
  let component: IssbComponent;
  let fixture: ComponentFixture<IssbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
