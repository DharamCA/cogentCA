import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsbComponent } from './fsb.component';

describe('FsbComponent', () => {
  let component: FsbComponent;
  let fixture: ComponentFixture<FsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
