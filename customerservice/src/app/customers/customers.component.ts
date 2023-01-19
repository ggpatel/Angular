import { Component } from '@angular/core';
import { CustomerService, CustomerServices } from '../customerservice';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  CustomerServices = CustomerServices;

  clearAll() {
    var confirmation = confirm("are you sure, you want to clearAll customer?");
    if (confirmation) {
      this.CustomerServices = [];
    };
  };
  deleteCustomer(id: number) {
    var confirmation = confirm("are you sure, you want to delet customer?");
    if (confirmation) {
      this.CustomerServices = this.CustomerServices.filter(function (item) { return item.id != id; });
    };
  };

};
