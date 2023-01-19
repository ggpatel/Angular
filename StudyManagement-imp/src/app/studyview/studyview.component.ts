import { Component, OnInit } from '@angular/core';
import { StudyManagement, StudyManagements } from '../studymangement'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studyview',
  templateUrl: './studyview.component.html',
  styleUrls: ['./studyview.component.css']
})
export class StudyViewComponent implements OnInit {
  study: StudyManagement | undefined;
  studys = StudyManagements;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const studyId = Number(routeParams.get('studyId'));
    this.study = this.studys.find(s => s.id === studyId);
  }
}
