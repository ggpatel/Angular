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
    id: 0,
    Project: '',
    Place: '',
    Price: 0,
    StartDate: ''
  });
  onSubmit() {
    var id = Number(this.ReserchForm.value.id);
    if (id > 0) {
      var Reserch = this.ReserchDepartments.find(function (vaccine) { return vaccine.id == id; });
      if (Reserch) {
        Reserch.Project = this.ReserchForm.value.Project?.toString() ?? "",
          Reserch.Place = this.ReserchForm.value.Place?.toString() ?? "",
          Reserch.Price = Number(this.ReserchForm.value.Price) ?? 0,
          Reserch.StartDate = new Date;
      }
    } else {
      this.ReserchDepartments.push({
        id: Number(this.ReserchDepartments.sort((a, b) => b.id - a.id)[0].id + 1),
        Project: this.ReserchForm.value.Project?.toString() ?? "",
        Place: this.ReserchForm.value.Place?.toString() ?? "",
        Price: Number(this.ReserchForm.value.Price),
        StartDate: new Date()
      })
    }

    console.warn('Your order has been submitted', this.ReserchForm.value);
    this.ReserchForm.reset();
    this.CancelReserch();
    this.ReserchDepartments.sort((a, b) => a.id - b.id);
  }

  AddReserch(): void {
    var formReserch = document.getElementById("formReserch")
    if (formReserch) {
      formReserch.style.display = "block";
    }
  }
  EditReserch(id: number) {

    this.Reserchservice.getResearch(id)
      .subscribe(res => {
        this.setReserchData(res);
      });
  };

  setReserchData(Reserch: ReserchDepartment) {

    if (Reserch) {
      var formReserch = document.getElementById("formReserch")
      if (formReserch) {
        formReserch.style.display = "block";
      }
      this.ReserchForm = this.formBuilder.group({
        id: Number(Reserch?.id) ?? 0,
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

  DeleteReserch(id: number) {
    var confirmation = confirm("are you sure do you want to delete this reserchdepartment?")
    if (confirmation) {
      this.ReserchDepartments = this.ReserchDepartments.filter(function (vaccine) { return vaccine.id != id; });
      this.Reserchservice.deleteResearch(id).subscribe();
    }
  }
  SelectReserch(id: Number) {
    this.ReserchDepartments = this.ReserchDepartments.filter(function (vaccine) { return vaccine.id == id; })
  }
  ClearAll() {
    var confirmation = confirm("are yoo sure do you want to delete all ?")
    if (confirmation) {
      this.ReserchDepartments = [];
    }
  }
}
