import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {

  video:any=0
  @Input() data:any= 0;
  constructor() { }

  ngOnInit(): void {
    this.video = this.data;
  }

}
