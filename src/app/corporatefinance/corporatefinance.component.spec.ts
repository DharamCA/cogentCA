import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatefinanceComponent } from './corporatefinance.component';

describe('CorporatefinanceComponent', () => {
  let component: CorporatefinanceComponent;
  let fixture: ComponentFixture<CorporatefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatefinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
