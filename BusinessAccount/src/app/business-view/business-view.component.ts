import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessAccount, BusinessAccounts } from '../businessaccount';

@Component({
  selector: 'app-business-view',
  templateUrl: './business-view.component.html',
  styleUrls: ['./business-view.component.css']
})
export class BusinessViewComponent implements OnInit {
  Business: BusinessAccount | undefined;
  Businesses = BusinessAccounts;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const BusinessId = Number(routeParams.get('BusinessId'));

    // Find the product that correspond with the id provided in route.
    this.Business = this.Businesses.find(ba => ba.Id === BusinessId);
  };
}




