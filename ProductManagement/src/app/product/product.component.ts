import { identifierName, isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductManagementS, ProductManagement } from '../ProductManagement';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductManagements = ProductManagementS;
  alertFunction(Name: string) {
    alert(name);
  };
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    var formProduct = document.getElementById("formProduct")
    if (formProduct) {
      formProduct.style.display = "none";
    };
  };
  AddProduct() {
    var formProduct = document.getElementById("formProduct")
    if (formProduct) {
      formProduct.style.display = "block";
    };
  };
  CancelProduct() {
    var formProduct = document.getElementById("formProduct")
    if (formProduct) {
      formProduct.style.display = "none";
    }
    this.ProductForm.reset();
  }
  ClearProduct() {
    this.ProductForm.reset();
  }

  ProductForm = this.formBuilder.group({
    Id: 0,
    Name: '',
    Quntity: 0,
    Price: 0,
    Email: '',
    StartDate: ''
  });

  onSubmit() {
    var id = Number(this.ProductForm.value.Id);
    if (id > 0) {
      var Product = this.ProductManagements.find(function (item) { return item.Id == id; })
      if (Product) {
        Product.Name = this.ProductForm.value.Name?.toString() ?? "",
          Product.Quntity = Number(this.ProductForm.value.Quntity);
        Product.Price = Number(this.ProductForm.value.Price);
        Product.Email = this.ProductForm.value.Email?.toString() ?? "",
          Product.StartDate = new Date;
      }
    } else {
      this.ProductManagements.push({
        Id: Number(this.ProductManagements.sort((a, b) => b.Id - a.Id)[0].Id + 1),
        Name: this.ProductForm.value.Name?.toString() ?? "",
        Quntity: Number(this.ProductForm.value.Quntity),
        Price: Number(this.ProductForm.value.Price),
        Email: this.ProductForm.value.Email?.toString() ?? "",
        StartDate: new Date()
      });
    }

    console.warn('Your order has been submitted', this.ProductForm.value);
    this.ProductForm.reset();
    this.CancelProduct();
    this.ProductManagements.sort((a, b) => a.Id - b.Id);
  };

  EditProduct(id: Number) {
    var Product = this.ProductManagements.find(function (item) { return item.Id == id });
    if (Product) {
      let formProduct = document.getElementById("formProduct")
      if (formProduct) {
        formProduct.style.display = "block";
      }

      this.ProductForm = this.formBuilder.group({
        Id: Number(Product?.Id) ?? 0,
        Name: Product?.Name?.toString() ?? "",
        Quntity: Number(Product?.Quntity) ?? 0,
        Price: Number(Product?.Price) ?? 0,
        Email: Product?.Email?.toString() ?? "",
        StartDate: Product?.StartDate?.toString() ?? ""
      });
    }
  };
  deleteProduct(id: Number) {
    var confirmation = confirm("are you sure do you want to delete this Product?")
    if (confirmation) {
      this.ProductManagements = this.ProductManagements.filter(function (item) { return item.Id != id; });
    }
  }
  SelectProduct(id: Number) {
    this.ProductManagements = this.ProductManagements.filter(function (item) { return item.Id == id; })
  }
  ClearAll() {
    var confirmation = confirm("are you sure do you want to clear all this")
    if (confirmation) {
      this.ProductManagements = [];
    }
  }
}
