import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportexportcodeComponent } from './importexportcode.component';

describe('ImportexportcodeComponent', () => {
  let component: ImportexportcodeComponent;
  let fixture: ComponentFixture<ImportexportcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportexportcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportexportcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
