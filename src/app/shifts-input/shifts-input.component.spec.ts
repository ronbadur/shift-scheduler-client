import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsInputComponent } from './shifts-input.component';

describe('ShiftsInputComponent', () => {
  let component: ShiftsInputComponent;
  let fixture: ComponentFixture<ShiftsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
