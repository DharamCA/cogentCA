import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedliapartershipannulComponent } from './limitedliapartershipannul.component';

describe('LimitedliapartershipannulComponent', () => {
  let component: LimitedliapartershipannulComponent;
  let fixture: ComponentFixture<LimitedliapartershipannulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedliapartershipannulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedliapartershipannulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
