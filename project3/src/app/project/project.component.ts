import { Component } from '@angular/core';
import { project, projects } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects = projects;
  
  alertFunction(name: string) {
    alert(name);
  };

};
