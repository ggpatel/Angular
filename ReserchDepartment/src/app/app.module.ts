import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReserchComponent } from './reserch/reserch.component';
import { ReserchAlertComponent } from './reserch-alert/reserch-alert.component';
import { ReserchViewComponent } from './reserch-view/reserch-view.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MyStyleDirective } from './my-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReserchComponent,
    ReserchAlertComponent,
    ReserchViewComponent,
    MyStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
