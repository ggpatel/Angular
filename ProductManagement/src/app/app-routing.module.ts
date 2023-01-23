import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'Product', component: ProductComponent },
  { path: 'ProductAlert', component: ProductAlertComponent },
  { path: 'ProductView/:ProductId', component: ProductViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
