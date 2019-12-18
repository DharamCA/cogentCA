import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formdir3kycannualComponent } from './formdir3kycannual.component';

describe('Formdir3kycannualComponent', () => {
  let component: Formdir3kycannualComponent;
  let fixture: ComponentFixture<Formdir3kycannualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formdir3kycannualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formdir3kycannualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
