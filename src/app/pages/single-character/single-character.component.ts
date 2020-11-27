import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/Character';
import { SWAPIService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss']
})
export class SingleCharacterComponent implements OnInit {
  id: string;
  characterInfo: Character;
  constructor(private swapService: SWAPIService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id']
    
    this.swapService.getCharacter(this.id).subscribe(res => {
      
      this.characterInfo = res
      console.log(this.characterInfo);
      
    })
  }

}
