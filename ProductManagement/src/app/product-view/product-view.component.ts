import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductManagementS, ProductManagement } from '../ProductManagement';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  Product: ProductManagement | undefined;
  Products = ProductManagementS;
  constructor(private route: ActivatedRoute) { };

  ngOnInit() {
    // First get the product id from the current route.

    const routeParams = this.route.snapshot.paramMap;
    const ProductId = Number(routeParams.get('ProductId'));
    // Find the product that correspond with the id provided in route.

    this.Product = this.Products.find(pm => pm.Id === ProductId);
  }

}