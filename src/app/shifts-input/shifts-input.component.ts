import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shifts-input',
  templateUrl: './shifts-input.component.html',
  styleUrls: ['./shifts-input.component.less']
})
export class ShiftsInputComponent implements OnInit {
  numberOfWorkers = 7;
  numberOfDays = 7;
  numberOfShifts = 3;
  numberOfNecessaryWorkersPerShift = 2;

  shiftsInputForm: FormGroup;
  // shiftsInputForm.getRawValue()[
  //   getShiftString(worker, (shift / numberOfWorkers), shift & numberOfWorkers)
  //   ]

  availabilities = [
    {value: 1000, icon: 'check_circle_outline', color: 'green'},
    {value: 100, icon: 'help_outline', color: 'faded-green'},
    {value: 10, icon: 'help_outline', color: 'orange'},
    {value: 1, icon: 'highlight_off', color: 'red'}
  ];

  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  constructor(private formBuilder: FormBuilder) {
    this.rebuildForm();
  }

  ngOnInit() {
  }

  public rebuildForm() {
    this.shiftsInputForm = this.formBuilder.group({
      numberOfWorkers: [this.numberOfWorkers, Validators.compose([Validators.min(1), Validators.required])],
      numberOfDays: [this.numberOfDays, Validators.compose([Validators.min(1), Validators.max(7), Validators.required])],
      numberOfShifts: [this.numberOfShifts, Validators.compose([Validators.min(1), Validators.max(3), Validators.required])],
      numberOfNecessaryWorkersPerShift: [this.numberOfNecessaryWorkersPerShift, Validators.compose([Validators.min(1), Validators.required])]
    });

    for (let i = 0; i < this.numberOfWorkers; i++) {
      for (let j = 0; j < this.numberOfDays; j++) {
        for (let k = 0; k < this.numberOfShifts; k++) {
          console.log(`shift-${i}-${j}-${k}`);
          this.shiftsInputForm.registerControl(`shift-${i}-${j}-${k}`, new FormControl(
            this.availabilities[0],
            Validators.required
          ));
        }
      }
    }
  }

  getCurrentValue(worker, relativeShift) {
    return this.shiftsInputForm.getRawValue()[this.getShiftString(worker, relativeShift)];
  }

  getShiftString(worker, relativeShift) {
    const day = (relativeShift / this.numberOfShifts);
    const shift = relativeShift % this.numberOfShifts;

    return `shift-${worker}-${Math.floor(day)}-${shift}`;
  }
}
