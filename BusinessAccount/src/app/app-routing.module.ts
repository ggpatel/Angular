import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessAlertComponent } from './business-alert/business-alert.component';
import { BusinessViewComponent } from './business-view/business-view.component';
import { BusinessesComponent } from './businesses/businesses.component';

const routes: Routes = [
  { path: 'Businesses', component: BusinessesComponent },
  { path: 'BusinessAlert', component: BusinessAlertComponent },
  { path: 'BusinessView/:BusinessId', component: BusinessViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
