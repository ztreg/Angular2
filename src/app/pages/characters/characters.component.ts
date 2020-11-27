import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { SWAPIService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  constructor(private swapiService: SWAPIService) { }

  ngOnInit(): void {
    this.swapiService.getCharacters().subscribe(res => {

      console.log(res);
      
      this.characters = res.results;
    })
  }

}

