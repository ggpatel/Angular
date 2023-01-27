import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserchAlertComponent } from './reserch-alert/reserch-alert.component';
import { ReserchViewComponent } from './reserch-view/reserch-view.component';
import { ReserchComponent } from './reserch/reserch.component';

const routes: Routes = [
  { path: 'Reserch', component: ReserchComponent },
  { path: 'ReserchAlert', component: ReserchAlertComponent },
  { path: 'ReserchView/:ReserchId', component: ReserchViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
