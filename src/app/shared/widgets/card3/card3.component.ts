import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss']
})
export class Card3Component implements OnInit {
  likes:any=0;
  @Input() data: any= 0;

  constructor() { }

  ngOnInit(): void {
    this.likes = this.data;
  }

}
