import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShiftsInputComponent } from './shifts-input/shifts-input.component';
import { ShiftsResultComponent } from './shifts-result/shifts-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent, ShiftsInputComponent, ShiftsResultComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    NgxSpinnerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
