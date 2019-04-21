import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsResultComponent } from './shifts-result.component';

describe('ShiftsResultComponent', () => {
  let component: ShiftsResultComponent;
  let fixture: ComponentFixture<ShiftsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
