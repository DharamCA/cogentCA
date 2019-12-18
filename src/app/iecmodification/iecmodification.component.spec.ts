import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IecmodificationComponent } from './iecmodification.component';

describe('IecmodificationComponent', () => {
  let component: IecmodificationComponent;
  let fixture: ComponentFixture<IecmodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IecmodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IecmodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
