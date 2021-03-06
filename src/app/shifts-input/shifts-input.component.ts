import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlgorithmService } from '../services/algorithm.service';
import { StateService } from '../services/state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-shifts-input',
  templateUrl: './shifts-input.component.html',
  styleUrls: ['./shifts-input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShiftsInputComponent implements OnInit {
  numberOfWorkers = 0;
  numberOfDays = 0;
  numberOfShifts = 0;
  numberOfNecessaryWorkersPerShift = 2;

  shiftsInputForm: FormGroup;

  availabilities = [
    {value: 1000, icon: 'check_circle_outline', color: 'green'},
    {value: 100, icon: 'help_outline', color: 'faded-green'},
    {value: 10, icon: 'help_outline', color: 'orange'},
    {value: 1, icon: 'highlight_off', color: 'red'}
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

  private isRebuildingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isRebuilding: Observable<boolean> = this.isRebuildingSubject.asObservable();

  constructor(
    private formBuilder: FormBuilder,
    private algorithmService: AlgorithmService,
    private stateService: StateService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams && queryParams.paramsInput) {
        try {
          const paramsInput = JSON.parse(queryParams.paramsInput);

          this.numberOfWorkers = paramsInput.numberOfWorkers;
          this.numberOfDays = paramsInput.numberOfDays;
          this.numberOfShifts = paramsInput.numberOfShifts;
          this.numberOfNecessaryWorkersPerShift = paramsInput.numberOfNecessaryWorkersPerShift;
        } catch (e) {
          console.log(e);
        }
      }

      this.buildForm();
      this.rebuildForm();
    });
  }

  private buildForm() {
    this.shiftsInputForm = this.formBuilder.group({
      numberOfWorkers: [
        this.numberOfWorkers,
        Validators.compose([Validators.min(1), Validators.required])
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

  public rebuildForm() {
    this.isRebuildingSubject.next(true);

    this.numberOfWorkers = this.shiftsInputForm.getRawValue()['numberOfWorkers'];
    this.numberOfShifts = this.shiftsInputForm.getRawValue()['numberOfShifts'];
    this.numberOfNecessaryWorkersPerShift = this.shiftsInputForm.getRawValue()['numberOfNecessaryWorkersPerShift'];

    for (let i = 0; i < this.numberOfWorkers; i++) {
      this.shiftsInputForm.registerControl(
        `worker-${i}`,
        new FormControl(`generated-${i}`, Validators.required)
      );

      for (let j = 0; j < this.numberOfDays; j++) {
        for (let k = 0; k < this.numberOfShifts; k++) {
          this.shiftsInputForm.registerControl(
            `shift-${i}-${j}-${k}`,
            new FormControl(this.availabilities[0], Validators.required)
          );
        }
      }
    }

    this.isRebuildingSubject.next(false);
  }

  getCurrentValue(worker, relativeShift) {
    return this.shiftsInputForm.getRawValue()[
      this.getShiftString(worker, relativeShift)
      ];
  }

  getShiftString(worker, relativeShift) {
    const day = relativeShift / this.numberOfShifts;
    const shift = relativeShift % this.numberOfShifts;

    return `shift-${worker}-${Math.floor(day)}-${shift}`;
  }

  submit() {
    this.spinner.show();
    const formValue = this.shiftsInputForm.getRawValue();

    this.algorithmService
      .runAlgorithm({
        constraints: this.extractConstraints(formValue),
        necessaryWorkers: this.numberOfNecessaryWorkersPerShift
      })
      .then(res => {
        this.spinner.hide();
        console.log(res);

        this.stateService.setNames(
          Object.keys(formValue)
            .filter(key => key.startsWith('worker-'))
            .map(key => formValue[key])
        );
        this.stateService.setShiftsData({
          workers: this.numberOfWorkers,
          days: this.numberOfDays,
          shifts: this.numberOfShifts
        });
        this.stateService.setResult(res.data);

        this.router.navigate(['shifts-result']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  private extractConstraints(formValue) {
    const constraints = this.generateConstraintsMock(
      this.numberOfWorkers,
      this.numberOfDays,
      this.numberOfShifts
    );

    for (const key in formValue) {
      if (formValue.hasOwnProperty(key)) {
        if (key.startsWith('shift-')) {
          const shiftData = this.extractShiftDataFromString(key);

          constraints[shiftData.worker][shiftData.day][shiftData.shift] =
            formValue[key].value;
        }
      }
    }

    return constraints;
  }

  private extractShiftDataFromString(shiftString: string) {
    shiftString = shiftString.substring(6);

    const worker = shiftString.substring(0, shiftString.indexOf('-'));
    shiftString = shiftString.substring(shiftString.indexOf('-') + 1);

    const day = shiftString.substring(0, shiftString.indexOf('-'));
    shiftString = shiftString.substring(shiftString.indexOf('-') + 1);

    return {
      worker,
      day,
      shift: shiftString
    };
  }

  private generateConstraintsMock(workers, days, shifts) {
    const constraintsMock: number[][][] = [];

    for (let i = 0; i < workers; i++) {
      constraintsMock.push([]);
      for (let j = 0; j < days; j++) {
        constraintsMock[i].push([]);
        for (let k = 0; k < shifts; k++) {
          constraintsMock[i][j].push(1000);
        }
      }
    }

    return constraintsMock;
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
}
