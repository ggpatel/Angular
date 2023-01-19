import { Component } from '@angular/core';
import { StudyManagement, StudyManagements } from '../studymangement'

@Component({
  selector: 'app-studymanagement-alert',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {
  studyManagements = StudyManagements;

  alertFunction(salary: number) {
    alert(salary);
  };
};