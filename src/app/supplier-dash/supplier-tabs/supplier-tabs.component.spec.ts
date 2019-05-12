import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTabsComponent } from './supplier-tabs.component';

describe('SupplierTabsComponent', () => {
  let component: SupplierTabsComponent;
  let fixture: ComponentFixture<SupplierTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
