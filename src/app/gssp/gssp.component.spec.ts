import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsspComponent } from './gssp.component';

describe('GsspComponent', () => {
  let component: GsspComponent;
  let fixture: ComponentFixture<GsspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
