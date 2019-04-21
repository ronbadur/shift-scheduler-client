import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  result: number[][][];
  shiftsData = {workers: 0, days: 0, shifts: 0};
  names: string[];

  getResult() {
    return this.result;
  }

  setResult(result) {
    this.result = result;

    return result;
  }

  getNames() {
    return this.names;
  }

  setNames(names: string[]) {
    this.names = names;

    return names;
  }

  getShiftsData() {
    return this.shiftsData;
  }

  setShiftsData(shiftsData: { workers: number, days: number, shifts: number }) {
    this.shiftsData = shiftsData;

    return shiftsData;
  }
}
