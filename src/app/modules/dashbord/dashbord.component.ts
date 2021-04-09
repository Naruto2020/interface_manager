import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  card:any= 0;
  card1:any= 0;
  card2:any= 0;
  card3:any= 0;
  bigChart:any=[];
  stats1:any= 0;
  stats2:any= 0;
  stats3:any= 0;
  stats4:any= 0;

  constructor(private service : DashboardService) { }

  ngOnInit(): void {
    this.card = this.service.card();
    this.card1 = this.service.card1();
    this.card2 = this.service.card2();
    this.card3 = this.service.card3();
    this.bigChart = this.service.bigChart();
    this.stats1 = this.service.stats1();
    this.stats2 = this.service.stats2();
    this.stats3 = this.service.stats3();
    this.stats4 = this.service.stats4();
  }

}
