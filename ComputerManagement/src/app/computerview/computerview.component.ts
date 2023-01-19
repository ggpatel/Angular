import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComputerManagement, ComputerManagements } from '../computermanagement';

@Component({
  selector: 'app-computerview',
  templateUrl: './computerview.component.html',
  styleUrls: ['./computerview.component.css']
})
export class ComputerviewComponent implements OnInit {
  ComputerManagement: ComputerManagement | undefined;
  computers = ComputerManagements;
  computer: { Id: number; DiscSize: number; RamSize: number; CompanyName: string; PurchaseDate: Date; } | undefined;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const ComputerId = Number(routeParams.get('ComputerId'));

    // Find the product that correspond with the id provided in route.
    this.computer = this.computers.find(cm => cm.Id === ComputerId);
  }
}
