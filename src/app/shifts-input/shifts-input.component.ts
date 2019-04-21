import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shifts-input',
  templateUrl: './shifts-input.component.html',
  styleUrls: ['./shifts-input.component.less']
})
export class ShiftsInputComponent implements OnInit {
  numberOfWorkers = 1;
  numberOfDays = 1;
  numberOfShifts = 1;
  numberOfNecessaryWorkersPerShift = 1;

  constructor() {
  }

  ngOnInit() {
  }
}
