import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-stats2',
  templateUrl: './stats2.component.html',
  styleUrls: ['./stats2.component.scss']
})
export class Stats2Component implements OnInit {

  vendus:any=0;
  @Input() data:any=0;

  constructor() { }

  ngOnInit(): void {
    this.vendus = this.data;
  }

}
