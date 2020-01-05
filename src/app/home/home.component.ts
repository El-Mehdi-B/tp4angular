import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbItems: number = 4;
  btnText: string = "Ajouter un élément.."
  objectifText: string = ""
  objectifs = [];
  constructor() { }

  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }

  ajoutItem(item: string) {
    this.objectifs.push(item)
    this.nbItems = this.objectifs.length
    this.objectifText = ""
      
  }

}
