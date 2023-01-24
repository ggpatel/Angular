import { Component } from '@angular/core';
import { ReserchDepartments, ReserchDepartment } from '../ReserchDepartment';

@Component({
  selector: 'app-reserch',
  templateUrl: './reserch.component.html',
  styleUrls: ['./reserch.component.css']
})
export class ReserchComponent {
  ReserchDepartments = ReserchDepartments;
  alertFunction(Project: string) {
    alert(Project);
  }
}
