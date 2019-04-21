import { Component, OnInit } from '@angular/core';
import {AlgorithmService} from '../services/algorithm.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shifts-result',
  templateUrl: './shifts-result.component.html',
  styleUrls: ['./shifts-result.component.less']
})
export class ShiftsResultComponent implements OnInit {

  isRunning = true;

  constructor(private algorithmService: AlgorithmService, private router: Router) { }

  ngOnInit() {
    console.log(this.router.getCurrentNavigation().extras);
    //this.algorithmService.runAlgorithm()
  }

}
