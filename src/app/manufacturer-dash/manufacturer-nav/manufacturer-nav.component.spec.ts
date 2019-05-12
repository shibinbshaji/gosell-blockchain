import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerNavComponent } from './manufacturer-nav.component';

describe('ManufacturerNavComponent', () => {
  let component: ManufacturerNavComponent;
  let fixture: ComponentFixture<ManufacturerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
