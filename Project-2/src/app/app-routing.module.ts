import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAlertsComponent } from './product-list/product-alerts.component';
import { products } from './project-2';
const routes: Routes = [
  { path: '', component: ProductAlertsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
