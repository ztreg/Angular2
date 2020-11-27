import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Character } from '../models/Character';

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
  constructor(private http: HttpClient) { }

  getCharacters():Observable<any> {
    return this.http.get(this.peopleURL)
  }

  getCharacter(id: string):Observable<Character> {
    return this.http.get<Character>(`${this.peopleURL}/${id}`)
  }

}
