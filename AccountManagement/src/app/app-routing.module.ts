import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAlertComponent } from './employee-alert/employee-alert.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'employeealert', component: EmployeeAlertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
