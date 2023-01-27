import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReserchDepartments, ReserchDepartment } from '../ReserchDepartment';

@Component({
  selector: 'app-reserch-view',
  templateUrl: './reserch-view.component.html',
  styleUrls: ['./reserch-view.component.css']
})
export class ReserchViewComponent implements OnInit {
  Reserch: ReserchDepartment | undefined;
  Reserchs = ReserchDepartments;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const ReserchId = Number(routeParams.get('ReserchId'));

    // Find the product that correspond with the id provided in route.
    this.Reserch = this.Reserchs.find(Rd => Rd.Id === ReserchId);
  };
};