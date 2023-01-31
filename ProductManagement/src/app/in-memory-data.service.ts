import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductManagement } from './ProductManagement';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const ProductManagementS = [

      {
        Id: 1,
        Name: "Laptop",
        Quntity: 2,
        Price: 1000,
        Email: "Laptop@gmail.com",
        StartDate: new Date()
      },
      {
        Id: 2,
        Name: "Ipad",
        Quntity: 3,
        Price: 1500,
        Email: "Ipad@gamil.com",
        StartDate: new Date()
      },
      {
        Id: 3,
        Name: "Tv",
        Quntity: 4,
        Price: 2000,
        Email: "tv@gmail.com",
        StartDate: new Date()
      }

    ];
    return { ProductManagementS };
  }
  genId(ProductManagementS: ProductManagement[]): number {
    return ProductManagementS.length > 0 ? Math.max(...ProductManagementS.map(PM => PM.Id)) + 1 : 11;
  }
}



