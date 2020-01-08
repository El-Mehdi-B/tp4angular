import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
  animations : [ trigger('animobjectifs' ,[
    transition ( '*=>*' ,[
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms',[ animate ( '0.7s ease-in' , keyframes ([
    style({opacity: 0, transform: 'translateY(-205%)', offset: 0}), style({opacity: .5, transform: 'translateY(85px)', offset: .3}),
    style({opacity: 1, transform: 'translateY(0)', offset: 1}), ]))]),{optional: true})
    ]) ])]


})

export class HomeComponent implements OnInit {

  private monRouteur: Router;
  nbItems: number = 4;
  isHovered: boolean;
  btnText: string = "Ajouter un élément.."
  objectifText: string = ""
  objectifs = [];

  constructor(router : Router) { this.monRouteur= router;}

  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }

  ajoutItem(item: string) {
    this.objectifs.push(item)
    this.nbItems = this.objectifs.length
    this.objectifText = ""   
    setTimeout(()=>{this.monRouteur.navigate(['about'])},1500);
  }
  toHover(){
    this.isHovered=true;
  }
  toLeave(){
    this.isHovered=false;
  }

}
