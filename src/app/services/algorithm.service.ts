import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  constructor() {
  }

  runAlgorithm(algorithmInput: { constraints: number[][][], necessaryWorkers: number }) {
    return axios.post(environment.serverUrl + '/runAlgorithm', algorithmInput);
  }
}
