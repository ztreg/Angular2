import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-characteritem',
  templateUrl: './characteritem.component.html',
  styleUrls: ['./characteritem.component.scss']
})
export class Characteritem implements OnInit {
  @Input() character: Character;
  id: string;
  constructor() { }

  ngOnInit(): void {
    let params:string[] = new URL(this.character.url).pathname.split('/')
    this.id = params[3]
    console.log( this.id);
    
  }
}
