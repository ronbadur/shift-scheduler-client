import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShiftsInputComponent } from './shifts-input/shifts-input.component';
import { ShiftsResultComponent } from './shifts-result/shifts-result.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', redirectTo: '', component: LandingPageComponent},
  {path: 'shifts-input', component: ShiftsInputComponent},
  {path: 'shifts-result', component: ShiftsResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
