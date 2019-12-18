import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkobjectrplyComponent } from './trademarkobjectrply.component';

describe('TrademarkobjectrplyComponent', () => {
  let component: TrademarkobjectrplyComponent;
  let fixture: ComponentFixture<TrademarkobjectrplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrademarkobjectrplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkobjectrplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
