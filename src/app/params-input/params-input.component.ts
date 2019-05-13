import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-params-input',
  templateUrl: './params-input.component.html',
  styleUrls: ['./params-input.component.less']
})
export class ParamsInputComponent implements OnInit {
  numberOfWorkers = 7;
  numberOfDays = 7;
  numberOfShifts = 3;
  numberOfNecessaryWorkersPerShift = 2;

  shiftsInputForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.shiftsInputForm = this.formBuilder.group({
      numberOfWorkers: [
        this.numberOfWorkers,
        Validators.compose([Validators.min(1), Validators.required])
      ],
      numberOfShifts: [
        this.numberOfShifts,
        Validators.compose([
          Validators.min(1),
          Validators.max(3),
          Validators.required
        ])
      ],
      numberOfNecessaryWorkersPerShift: [
        this.numberOfNecessaryWorkersPerShift,
        Validators.compose([Validators.min(1), Validators.required])
      ]
    });
  }

}
