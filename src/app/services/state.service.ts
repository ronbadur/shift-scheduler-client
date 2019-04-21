import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  result: number[][][];
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

  setNames() {
    return this.names;
  }
}
