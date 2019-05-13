import {Component, Input, OnInit} from '@angular/core';
import {AlgorithmService} from '../services/algorithm.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  gettingStarted() {
    this.router.navigate(['params-input']);
  }

}
