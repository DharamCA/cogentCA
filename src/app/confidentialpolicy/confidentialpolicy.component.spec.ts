import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialpolicyComponent } from './confidentialpolicy.component';

describe('ConfidentialpolicyComponent', () => {
  let component: ConfidentialpolicyComponent;
  let fixture: ComponentFixture<ConfidentialpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
