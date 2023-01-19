import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { ComputerManagement, ComputerManagements } from '../computermanagement';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent {
  ComputerManagements = ComputerManagements;
  clearAll() {
    var confirmation = confirm("are you sure ,do you want to clear all customer?");
    if (confirmation) {
      this.ComputerManagements = [];
    };
  };
  deleteCustomer(id: number) {
    var confirmation = confirm("are you sure you want to delete all this cutomer?")
    if (confirmation) {
      this.ComputerManagements = this.ComputerManagements.filter(function (item) { return item.Id != id; });
    };
  };
};


