import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiesComponent } from './studies//studies.component';
import { StudyAlertComponent } from './study-alert/study-alert.component';
import { StudyViewComponent } from './studyview/studyview.component';

const routes: Routes = [
  { path: 'studies', component: StudiesComponent },
  { path: 'studyalert', component: StudyAlertComponent },
  { path: 'studyview/:studyId', component: StudyViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
