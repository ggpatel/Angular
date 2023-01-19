import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerAlertComponent } from './customer-alert/customer-alert.component';
import { CustomerviewComponent } from './customerview/customerview.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerAlertComponent,
    CustomerviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
