import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudiesComponent } from './studies/studies.component';
import { StudyAlertComponent } from './study-alert/study-alert.component';
import { StudyViewComponent } from './studyview/studyview.component';

@NgModule({
  declarations: [
    AppComponent,
    StudiesComponent,
    StudyAlertComponent,
    StudyViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
