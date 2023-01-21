import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScienceTechnologies, ScienceTechnology } from '../ScienceTechnology';

@Component({
  selector: 'app-science-view',
  templateUrl: './science-view.component.html',
  styleUrls: ['./science-view.component.css']
})
export class ScienceViewComponent implements OnInit {
  Science: ScienceTechnology | undefined;
  Sciences = ScienceTechnologies;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const ScienceId = Number(routeParams.get('ScienceId'));

    this.Science = this.Sciences.find(S => S.Id === ScienceId);
  }

}
