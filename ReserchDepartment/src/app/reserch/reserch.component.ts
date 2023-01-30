import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReserchDepartments, ReserchDepartment } from '../ReserchDepartment';
import { HttpClientModule } from '@angular/common/http';
import { ReserchServiceService } from '../reserch-service.service';
@Component({
  selector: 'app-reserch',
  templateUrl: './reserch.component.html',
  styleUrls: ['./reserch.component.css']
})
export class ReserchComponent implements OnInit {
  ReserchDepartments: ReserchDepartment[] = [];
  alertFunction(Project: string) {
    alert(Project);
  }
  constructor(
    private formBuilder: FormBuilder,
    private Reserchservice: ReserchServiceService
  ) { }
  ngOnInit(): void {
    var formReserch = document.getElementById("formReserch")
    if (formReserch) {
      formReserch.style.display = "none";
    }

    this.Reserchservice.getReseerchDepartmnet()
      .subscribe(res => this.ReserchDepartments = res);
  }
  ReserchForm = this.formBuilder.group({
    Id: 0,
    Project: '',
    Place: '',
    Price: 0,
    StartDate: ''
  });
  onSubmit() {
    var id = Number(this.ReserchForm.value.Id);
    if (id > 0) {
      var Reserch = this.ReserchDepartments.find(function (vaccine) { return vaccine.Id == id; });
      if (Reserch) {
        Reserch.Project = this.ReserchForm.value.Project?.toString() ?? "",
          Reserch.Place = this.ReserchForm.value.Place?.toString() ?? "",
          Reserch.Price = Number(this.ReserchForm.value.Price) ?? 0,
          Reserch.StartDate = new Date;
      }
    } else {
      this.ReserchDepartments.push({
        Id: Number(this.ReserchDepartments.sort((a, b) => b.Id - a.Id)[0].Id + 1),
        Project: this.ReserchForm.value.Project?.toString() ?? "",
        Place: this.ReserchForm.value.Place?.toString() ?? "",
        Price: Number(this.ReserchForm.value.Price),
        StartDate: new Date()
      })
    }

    console.warn('Your order has been submitted', this.ReserchForm.value);
    this.ReserchForm.reset();
    this.CancelReserch();
    this.ReserchDepartments.sort((a, b) => a.Id - b.Id);
  }

  AddReserch(): void {
    var formReserch = document.getElementById("formReserch")
    if (formReserch) {
      formReserch.style.display = "block";
    }
  }
  EditReserch(id: Number) {
    var Reserch = ReserchDepartments.find(function (vaccine) { return vaccine.Id == id; });
    if (Reserch) {
      var formReserch = document.getElementById("formReserch")
      if (formReserch) {
        formReserch.style.display = "block";
      }
      this.ReserchForm = this.formBuilder.group({
        Id: Number(Reserch?.Id) ?? 0,
        Project: Reserch?.Project?.toString() ?? "",
        Place: Reserch?.Place?.toString() ?? "",
        Price: Number(Reserch?.Price) ?? 0,
        StartDate: Reserch?.StartDate?.toString() ?? "",
      })
    }
  }
  CancelReserch() {
    var formReserch = document.getElementById("formReserch")
    if (formReserch) {
      formReserch.style.display = "none";
    }
    this.ReserchForm.reset();
  }
  ClearReserch() {
    this.ReserchForm.reset();
  }

  DeleteReserch(id: Number) {
    var confirmation = confirm("are you sure do you want to delete this reserchdepartment?")
    if (confirmation) {
      this.ReserchDepartments = this.ReserchDepartments.filter(function (vaccine) { return vaccine.Id != id; });
    }
  }
  SelectReserch(id: Number) {
    this.ReserchDepartments = this.ReserchDepartments.filter(function (vaccine) { return vaccine.Id == id; })
  }
  ClearAll() {
    var confirmation = confirm("are yoo sure do you want to delete all ?")
    if (confirmation) {
      this.ReserchDepartments = [];
    }
  }
}
