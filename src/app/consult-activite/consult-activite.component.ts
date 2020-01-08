import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {

  inputMessage: string
  idMessage: string
  constructor(input: ActivatedRoute ) { 
    this.inputMessage= input.snapshot.params['message'];
    this.idMessage= input.snapshot.params['id'];
  }
  ngOnInit() {
  }

}
