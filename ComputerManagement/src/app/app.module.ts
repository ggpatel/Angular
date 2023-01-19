import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputersComponent } from './computers/computers.component';
import { ComputerAlertComponent } from './computer-alert/computer-alert.component';
import { ComputerviewComponent } from './computerview/computerview.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputersComponent,
    ComputerAlertComponent,
    ComputerviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
