import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsInputComponent } from './params-input.component';

describe('ParamsInputComponent', () => {
  let component: ParamsInputComponent;
  let fixture: ComponentFixture<ParamsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
