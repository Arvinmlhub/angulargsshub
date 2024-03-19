import { Component } from '@angular/core';
import { ViewDetailsGrid } from 'src/app/view-details-grid';
import{ Input } from '@angular/core';
import { viewDetailsGrid } from 'src/app/utils/viewTableGrid';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pfp-paid-detail',
  templateUrl: './pfp-paid-detail.component.html',
  styleUrls: ['./pfp-paid-detail.component.css']

  
})
export class PfpPaidDetailComponent {
  constructor(private router: Router,private route: ActivatedRoute) {}

  viewDetailsGrid: ViewDetailsGrid[] = viewDetailsGrid;
  ngOnInit(): void {
  }
}
