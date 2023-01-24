import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReserchComponent } from './reserch/reserch.component';
import { ReserchAlertComponent } from './reserch-alert/reserch-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ReserchComponent,
    ReserchAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
