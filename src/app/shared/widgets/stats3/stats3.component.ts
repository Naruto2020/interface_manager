import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-stats3',
  templateUrl: './stats3.component.html',
  styleUrls: ['./stats3.component.scss']
})
export class Stats3Component implements OnInit {
  usrs:any= 0;
  @Input() data:any= 0;

  constructor() { }

  ngOnInit(): void {
    this.usrs = this.data;
  }

}
