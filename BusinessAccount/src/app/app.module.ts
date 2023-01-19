import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessAlertComponent } from './business-alert/business-alert.component';
import { BusinessViewComponent } from './business-view/business-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessesComponent,
    BusinessAlertComponent,
    BusinessViewComponent
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
