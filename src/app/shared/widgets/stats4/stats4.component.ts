import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-stats4',
  templateUrl: './stats4.component.html',
  styleUrls: ['./stats4.component.scss']
})
export class Stats4Component implements OnInit {
  commandes:any=0;
  @Input() data:any=0;

  constructor() { }

  ngOnInit(): void {
    this.commandes = this.data;
  }

}
