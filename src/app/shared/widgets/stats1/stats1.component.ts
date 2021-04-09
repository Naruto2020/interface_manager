import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-stats1',
  templateUrl: './stats1.component.html',
  styleUrls: ['./stats1.component.scss']
})
export class Stats1Component implements OnInit {
  prevu:any=0;
  @Input() data:any=0;

  constructor() { }

  ngOnInit(): void {
    this.prevu = this.data;
  }

}
