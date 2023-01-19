import { Component } from '@angular/core';
import { Employees, Employee } from '../employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees = Employees;
}
