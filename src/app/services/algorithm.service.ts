import {Injectable} from '@angular/core';
import axios from 'axios';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  constructor() {
  }

  runAlgorithm(constraints: any) {
    return axios.post(environment.serverUrl + '/runAlgorithm', constraints);
  }
}
