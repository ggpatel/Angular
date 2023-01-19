import { Component } from '@angular/core';
import { products } from '../project-2';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  product = products;

  alertFunction() {
    alert("Alert Function!!");
  };

};