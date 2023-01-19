import { Component, OnInit } from '@angular/core';
import { CustomerService, CustomerServices } from '../customerservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent {
  customer: CustomerService | undefined;
  customers = CustomerServices;
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const customerId = Number(routeParams.get('customerId'));

    this.customer = this.customers.find(c => c.id === customerId);
  }
}
