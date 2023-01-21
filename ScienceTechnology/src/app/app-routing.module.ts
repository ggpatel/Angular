import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScienceAlertComponent } from './science-alert/science-alert.component';
import { ScienceViewComponent } from './science-view/science-view.component';
import { ScienceComponent } from './science/science.component';

const routes: Routes = [
  { path: 'Science', component: ScienceComponent },
  { path: 'ScienceAlert', component: ScienceAlertComponent },
  { path: 'ScienceView/:ScienceId', component: ScienceViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
