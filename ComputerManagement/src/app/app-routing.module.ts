import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerAlertComponent } from './computer-alert/computer-alert.component';
import { ComputersComponent } from './computers/computers.component';
import { ComputerviewComponent } from './computerview/computerview.component';

const routes: Routes = [
  { path: 'computers', component: ComputersComponent },
  { path: 'ComputerAlert', component: ComputerAlertComponent },
  { path: 'ComputerView/:ComputerId', component: ComputerviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
