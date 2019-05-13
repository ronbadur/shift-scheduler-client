import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  paramsInputForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.paramsInputForm = this.formBuilder.group({
      numberOfWorkers: [
        this.numberOfWorkers,
        Validators.compose([Validators.min(1), Validators.required])
      ],
      numberOfDays: [
        this.numberOfDays,
        Validators.compose([
          Validators.min(1),
          Validators.max(7),
          Validators.required
        ])
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

  goToShiftsInput() {
    this.router.navigate(['shifts-input'], {
      queryParams: {
        paramsInput: JSON.stringify({
          numberOfWorkers: this.numberOfWorkers,
          numberOfDays: this.numberOfDays,
          numberOfShifts: this.numberOfShifts,
          numberOfNecessaryWorkersPerShift: this.numberOfNecessaryWorkersPerShift
        })
      }
    });
  }
}
