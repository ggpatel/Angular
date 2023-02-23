import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ReserchDepartment } from './ReserchDepartment';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const ReserchDepartments = [
      {
        id: 1,
        name: "Fizervaccine",
        Place: "USA",
        Price: 100000,
        StartDate: new Date("8/12/22")
      },
      {
        id: 2,
        name: "covaccine",
        Place: "India",
        Price: 50000,
        StartDate: new Date("2/10/22")
      },
      {
        id: 3,
        name: "MordenaVaccine",
        Place: "USA",
        Price: 150000,
        StartDate: new Date("2/10/22")
      }
    ];
    return { ReserchDepartments };
  }
  genId(ReserchDepartments: ReserchDepartment[]): number {
    return ReserchDepartments.length > 0 ? Math.max(...ReserchDepartments.map(RD => RD.id)) + 1 : 11;
  }
}
