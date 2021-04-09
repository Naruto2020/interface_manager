import { Component, OnInit } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Input, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // permet au composant header de communiquer avec sont parent default via un évènement
  @Output() toggleSideBarForMe : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  //emission d'un évènement lors du click
  toogleSideBar(){
    this.toggleSideBarForMe.emit()
  }

}
