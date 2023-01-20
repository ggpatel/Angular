import { Component, OnInit } from '@angular/core';
import { BusinessAccount, BusinessAccounts } from '../businessaccount';
import { FormBuilder } from '@angular/forms';
import { BusinessViewComponent } from '../business-view/business-view.component';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {
  BusinessAccounts: BusinessAccount[] = BusinessAccounts;

  BusinessForm = this.formBuilder.group({
    Id: 0,
    Name: '',
    RentPrice: 0,
    Description: '',
    StartDate: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }
  AddBusiness() {
    let formBusiness = document.getElementById("formBusiness")
    if (formBusiness) {
      formBusiness.style.display = "block";
    }
  }
  cancelBusiness() {
    let formBusiness = document.getElementById("formBusiness")
    if (formBusiness) {
      formBusiness.style.display = "none";
    }
  }

  EditBusiness(id: number) {
    var Business = this.BusinessAccounts.find(function (product) { return product.Id == id; });

    if (Business) {
      let formBusiness = document.getElementById("formBusiness")
      if (formBusiness) {
        formBusiness.style.display = "block";
      }

      this.BusinessForm = this.formBuilder.group({
        Id: Number(Business?.Id) ?? 0,
        Name: Business?.Name?.toString() ?? "",
        RentPrice: Number(Business?.RentPrice) ?? 0,
        Description: Business?.Description?.toString() ?? "",
        StartDate: Business?.StartDate?.toString()
      });
    }

  }

  ngOnInit(): void {
    let formBusiness = document.getElementById("formBusiness")
    if (formBusiness) {
      formBusiness.style.display = "none";

    }
  }

  onSubmit() {
    var id = Number(this.BusinessForm.value.Id);
    if (id > 0) {
      var business = this.BusinessAccounts.find(function (product) { return product.Id == id; })
      if (business) {
        business.Name = this.BusinessForm.value.Name?.toString() ?? "",
          business.RentPrice = Number(this.BusinessForm.value.RentPrice);
        business.Description = this.BusinessForm.value.Description?.toString() ?? "";
        business.StartDate = new Date();
      }
    } else
      this.BusinessAccounts.push({
        Id: Number(this.BusinessAccounts.sort((a, b) => b.Id - a.Id)[0].Id + 1),
        Name: this.BusinessForm.value.Name?.toString() ?? "",
        RentPrice: Number(this.BusinessForm.value.RentPrice),
        Description: this.BusinessForm.value.Description?.toString() ?? "",
        StartDate: new Date()
      });

    console.warn('Your order has been submitted', this.BusinessForm.value);
    this.BusinessForm.reset();
    this.cancelBusiness();
    this.BusinessAccounts.sort((a, b) => a.Id - b.Id);
  }

  clearAll() {
    var confirmation = confirm("are you sure do you want to clear all business account?");
    if (confirmation) {
      this.BusinessAccounts = [];
    };
  };
  deleteBusiness(id: number) {
    var confirmation = confirm("are you sure do you want to delete all business account?")
    if (confirmation) {
      this.BusinessAccounts = this.BusinessAccounts.filter(function (product) { return product.Id != id; });
    };
  };
}


