import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ReserchDepartments, ReserchDepartment } from '../ReserchDepartment';

@Component({
  selector: 'app-reserch',
  templateUrl: './reserch.component.html',
  styleUrls: ['./reserch.component.css']
})
export class ReserchComponent implements OnInit {
  ReserchDepartments = ReserchDepartments;
  alertFunction(Project: string) {
    alert(Project);
  }
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    var formReserch = document.getElementById("formReserch")
    if (formReserch) {
      formReserch.style.display = "none";
    }
  }
  ReserchForm = this.formBuilder.group({
    Id: 0,
    Project: '',
    Place: '',
    Price: 0,
    StartDate: ''
  });
  onSubmit() {
    console.warn('Your order has been submitted', this.ReserchForm.value);
    this.ReserchForm.reset();
  }

  AddReserch(): void {
    var formReserch = document.getElementById("AddReserch")
    if (formReserch) {
      formReserch.style.display = "block";
    }
  }
  CancelReserch() {
    var formReserch = document.getElementById("formReserch")
    if (formReserch) {
      formReserch.style.display = "none";
    }
  }

  DeleteReserch(id: Number) {
    var confirmation = confirm("are you sure do you want to delete this reserchdepartment?")
    if (confirmation) {
      this.ReserchDepartments = this.ReserchDepartments.filter(function (vaccine) { return vaccine.Id != id; });
    }
  }
  ClearAll() {
    var confirmation = confirm("are yoo sure do you want to delete all ?")
    if (confirmation) {
      this.ReserchDepartments = [];
    }
  }
}
