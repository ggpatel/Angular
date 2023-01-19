import { Component } from '@angular/core';
import { Department, Departments } from '../department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departments = Departments;

  alertFunction(name: string) {
    alert(name);
  }
}
