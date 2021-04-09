import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  suscribers:any=0;
  @Input() data: any= 0 ;
  constructor() { }

  ngOnInit(): void {
    this.suscribers = this.data;
  }

}
