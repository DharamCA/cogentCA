import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterofundertakingComponent } from './letterofundertaking.component';

describe('LetterofundertakingComponent', () => {
  let component: LetterofundertakingComponent;
  let fixture: ComponentFixture<LetterofundertakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterofundertakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterofundertakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
