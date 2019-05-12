import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerTabsComponent } from './manufacturer-tabs.component';

describe('ManufacturerTabsComponent', () => {
  let component: ManufacturerTabsComponent;
  let fixture: ComponentFixture<ManufacturerTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
