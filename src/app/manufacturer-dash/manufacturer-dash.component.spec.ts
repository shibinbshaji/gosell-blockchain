import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerDashComponent } from './manufacturer-dash.component';

describe('ManufacturerDashComponent', () => {
  let component: ManufacturerDashComponent;
  let fixture: ComponentFixture<ManufacturerDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
