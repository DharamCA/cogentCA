import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdsreturnfillingComponent } from './tdsreturnfilling.component';

describe('TdsreturnfillingComponent', () => {
  let component: TdsreturnfillingComponent;
  let fixture: ComponentFixture<TdsreturnfillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdsreturnfillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdsreturnfillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
