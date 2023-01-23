import { Component, OnInit } from '@angular/core';
import { ScienceTechnologies, ScienceTechnology } from '../ScienceTechnology';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  ScienceTechnologies = ScienceTechnologies;
  Science: ScienceTechnology | undefined

  ScienceForm = this.formBuilder.group({
    Id: 0,
    Name: '',
    Price: 0,
    Details: '',
    StartDate: '',
    Email: ''

  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }
  AddScience() {
    let formScience = document.getElementById("formScience")
    if (formScience) {
      formScience.style.display = "block";
    };
  };
  cancelScience() {
    let formScience = document.getElementById("formScience")
    if (formScience) {
      formScience.style.display = "none";
    }
  }
  ngOnInit(): void {
    let formScience = document.getElementById("formScience")
    if (formScience) {
      formScience.style.display = "none";
    };
  };

  onSubmit() {
    var id = Number(this.ScienceForm.value.Id);
    if (id > 0) {
      var Science = this.ScienceTechnologies.find(function (product) { return product.Id == id; });
      if (Science) {
        Science.Name = this.ScienceForm.value.Name?.toString() ?? "",
          Science.Price = Number(this.ScienceForm.value.Price);
        Science.Details = this.ScienceForm.value.Details?.toString() ?? "",
          Science.StartDate = new Date();
        Science.Email = this.ScienceForm.value.Email?.toString() ?? ""
      }
    } else {
      this.ScienceTechnologies.push({
        Id: Number(this.ScienceTechnologies.sort((a, b) => b.Id - a.Id)[0].Id + 1),
        Name: this.ScienceForm.value.Name?.toString() ?? "",
        Price: Number(this.ScienceForm.value.Price),
        Details: this.ScienceForm.value.Details?.toString() ?? "",
        StartDate: new Date(),
        Email: this.ScienceForm.value.Email?.toString() ?? ""
      })
    }
    console.warn('Your order has been submitted', this.ScienceForm.value);
    this.ScienceForm.reset();
    this.cancelScience();
    this.ScienceTechnologies.sort((a, b) => a.Id - b.Id)[0].Id + 1
  };

  EditScience(id: Number) {
    var Science = this.ScienceTechnologies.find(function (product) { return product.Id == id; })
    if (Science) {
      let formScience = document.getElementById("formScience")
      if (formScience) {
        formScience.style.display = "block";
      };

      this.ScienceForm = this.formBuilder.group({
        Id: Number(Science?.Id) ?? 0,
        Name: Science?.Name?.toString() ?? "",
        Price: Number(Science?.Price) ?? 0,
        Details: Science?.Details?.toString() ?? "",
        StartDate: Science?.StartDate?.toString() ?? "",
        Email: Science?.Email?.toString() ?? "",
      });
    }
  }
  deleteScience(id: Number) {
    var confirmation = confirm("Are you sure do you want to delete all science product?")
    if (confirmation) {
      this.ScienceTechnologies = this.ScienceTechnologies.filter(function (product) { return product.Id != id; })
    };
  };

  clearAll() {
    var confirmation = confirm("Are you sure do you want to clear all science product?")
    if (confirmation) {
      this.ScienceTechnologies = [];

    };
  };
};
