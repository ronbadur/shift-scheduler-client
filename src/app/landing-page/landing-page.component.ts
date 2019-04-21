import {Component, Input, OnInit} from '@angular/core';
import {AlgorithmService} from '../services/algorithm.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {


  constructor(private algoritmService: AlgorithmService) {
  }

  ngOnInit() {
  }

  runAlgo() {
    const constraints = {
      constraints: [[[1000, 1000, 1000],
        [1000, 1000, 1000],
        [1000, 1000, 1000]],
        [[1000, 1000, 1000],
          [1000, 1000, 1000],
          [1000, 1000, 1000]],
        [[1000, 1000, 1000],
          [1000, 1000, 1000],
          [1000, 1000, 1000]]],
      necessaryWorkers: 2};
    this.algoritmService.runAlgorithm(constraints).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

}
