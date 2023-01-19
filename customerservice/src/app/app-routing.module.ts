import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAlertComponent } from './customer-alert/customer-alert.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerviewComponent } from './customerview/customerview.component';

const routes: Routes = [
  { path: 'customer', component: CustomersComponent },
  { path: 'customeralert', component: CustomerAlertComponent },
  { path: 'customerview/:customerId', component: CustomerviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
