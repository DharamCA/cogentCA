import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvtldtcompanyannualComponent } from './pvtldtcompanyannual.component';

describe('PvtldtcompanyannualComponent', () => {
  let component: PvtldtcompanyannualComponent;
  let fixture: ComponentFixture<PvtldtcompanyannualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvtldtcompanyannualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvtldtcompanyannualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
