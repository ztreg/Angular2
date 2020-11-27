import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Character } from '../models/Character';
import { CharacterResponse } from '../models/CharactersResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SWAPIService {

  // Här ligger fetches, urls etc
  baseURL: string = 'https://swapi.dev/api/'
  peopleURL: string = `${this.baseURL}people`
  constructor(private fetch: HttpClient) { }

  getCharacters():Observable<CharacterResponse> {
    return this.fetch.get<CharacterResponse>(this.peopleURL)
  }

  getCharacter(id: string):Observable<Character> {
    return this.fetch.get<Character>(`${this.peopleURL}/${id}`)
  }

}
