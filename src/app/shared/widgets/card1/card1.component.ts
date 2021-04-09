import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {
  times:any= 0;
  @Input() data:any= 0 ;

  constructor() { }

  ngOnInit(): void {
    this.times = this.data;
  }

}
