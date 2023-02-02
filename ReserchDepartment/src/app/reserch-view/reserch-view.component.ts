import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ReserchDepartments, ReserchDepartment } from '../ReserchDepartment';
import { ReserchServiceService } from '../reserch-service.service';


@Component({
  selector: 'app-reserch-view',
  templateUrl: './reserch-view.component.html',
  styleUrls: ['./reserch-view.component.css']
})
export class ReserchViewComponent implements OnInit {
  Reserch: ReserchDepartment | undefined;
  Reserchs = ReserchDepartments;

  constructor(private route: ActivatedRoute,
    private reserchService: ReserchServiceService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const reserchId = Number(routeParams.get('ReserchId'));

    this.reserchService.getResearch(reserchId)
      .subscribe(res => {
        this.Reserch = res;
        console.log(res);
      });
  };
};