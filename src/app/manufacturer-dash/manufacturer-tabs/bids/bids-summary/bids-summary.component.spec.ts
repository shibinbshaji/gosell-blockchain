import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsSummaryComponent } from './bids-summary.component';

describe('BidsSummaryComponent', () => {
  let component: BidsSummaryComponent;
  let fixture: ComponentFixture<BidsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
