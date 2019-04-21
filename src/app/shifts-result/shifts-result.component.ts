import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-shifts-result',
  templateUrl: './shifts-result.component.html',
  styleUrls: ['./shifts-result.component.less']
})
export class ShiftsResultComponent implements OnInit {
  result: number[][][];
  shiftsData;
  names: string[];

  ngOnInit(): void {
  }

  resultOptions = [
    {value: false, icon: 'highlight_off', color: 'red'},
    {value: true, icon: 'check_circle_outline', color: 'green'}
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

  getCurrentValue(worker: number, relativeShift: number) {
    console.log(worker);
    console.log(relativeShift);
    return this.result[worker][Math.floor(relativeShift / this.shiftsData.shifts)][relativeShift % this.shiftsData.shifts];
  }

  constructor(private stateService: StateService,
              private router: Router) {
    this.result = this.stateService.getResult();
    this.shiftsData = this.stateService.getShiftsData();
    this.names = this.stateService.getNames();
  }
}
