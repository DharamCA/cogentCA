import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorpageComponent } from './administratorpage.component';

describe('AdministratorpageComponent', () => {
  let component: AdministratorpageComponent;
  let fixture: ComponentFixture<AdministratorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
