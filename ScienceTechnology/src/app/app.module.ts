import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScienceComponent } from './science/science.component';
import { ScienceAlertComponent } from './science-alert/science-alert.component';
import { ScienceViewComponent } from './science-view/science-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ScienceComponent,
    ScienceAlertComponent,
    ScienceViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
