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
    StartDate: 0,
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
    var Science1 = {
      Id: Number(this.ScienceTechnologies.sort((a, b) => b.Id - a.Id)[0].Id + 1),
      Name: this.ScienceForm.value.Name?.toString() ?? "",
      Price: Number(this.ScienceForm.value.Price),
      Details: this.ScienceForm.value.Details?.toString() ?? "",
      StartDate: new Date(),
      Email: this.ScienceForm.value.Email?.toString() ?? ""
    };
    this.ScienceTechnologies.push(Science1);

    console.warn('Your order has been submitted', this.ScienceForm.value);
    this.ScienceForm.reset();
    this.cancelScience();
    this.ScienceTechnologies.sort((a, b) => a.Id - b.Id)[0].Id + 1
  };

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
