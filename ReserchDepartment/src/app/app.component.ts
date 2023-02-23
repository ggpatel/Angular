import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReserchDepartment';
  onlineStatus = navigator.onLine;

  getColor() {
    return navigator.onLine == true ? 'green' : 'red';
  }
}
