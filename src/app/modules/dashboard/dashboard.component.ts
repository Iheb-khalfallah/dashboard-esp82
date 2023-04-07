import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  bigchart = {};
  cards= {};
  piechart = {};
  drilldown = {};
  datalabel={};
  constructor(private dashboardService:DashboardService){}
  ngOnInit(){
    this.bigchart=this.dashboardService.bigchart();
    this.cards=this.dashboardService.cards();
    this.piechart=this.dashboardService.piechart();
    this.drilldown=this.dashboardService.Drilldown();
    this.datalabel=this.dashboardService.datalabel();
  }
}
