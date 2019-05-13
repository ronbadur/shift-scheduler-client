import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftsInputComponent } from './shifts-input/shifts-input.component';
import { ShiftsResultComponent } from './shifts-result/shifts-result.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ParamsInputComponent } from './params-input/params-input.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', redirectTo: ''},
  { path: 'params-input', component: ParamsInputComponent },
  {path: 'shifts-input', component: ShiftsInputComponent},
  {path: 'shifts-result', component: ShiftsResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
