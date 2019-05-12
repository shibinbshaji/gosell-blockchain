import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerFooterComponent } from './manufacturer-footer.component';

describe('ManufacturerFooterComponent', () => {
  let component: ManufacturerFooterComponent;
  let fixture: ComponentFixture<ManufacturerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
