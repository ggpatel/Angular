import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserchComponent } from './reserch/reserch.component';

const routes: Routes = [
  { path: '', component: ReserchComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
