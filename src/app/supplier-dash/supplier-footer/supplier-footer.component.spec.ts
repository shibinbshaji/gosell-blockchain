import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFooterComponent } from './supplier-footer.component';

describe('SupplierFooterComponent', () => {
  let component: SupplierFooterComponent;
  let fixture: ComponentFixture<SupplierFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
