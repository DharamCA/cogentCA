import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forminc22aannualComponent } from './forminc22aannual.component';

describe('Forminc22aannualComponent', () => {
  let component: Forminc22aannualComponent;
  let fixture: ComponentFixture<Forminc22aannualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forminc22aannualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forminc22aannualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
