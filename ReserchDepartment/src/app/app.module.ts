import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReserchComponent } from './reserch/reserch.component';
import { ReserchAlertComponent } from './reserch-alert/reserch-alert.component';
import { ReserchViewComponent } from './reserch-view/reserch-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ReserchComponent,
    ReserchAlertComponent,
    ReserchViewComponent
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
