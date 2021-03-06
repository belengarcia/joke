import { Joke } from './../models/joke.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JokerService {


  private jokeRandom: string = 'https://api.chucknorris.io/jokes/random'
  private jokeCategories: string = 'https://api.chucknorris.io/jokes/categories'
  private jokeWithCat: string = `https://api.chucknorris.io/jokes/random?category=`
  constructor(private http: HttpClient) { }
  
  getRandomJoke(): Observable<Joke>{
   return this.http.get<Joke>(this.jokeRandom)
  }

  displayCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.jokeCategories)
  }

  getJokeWithCat(category): Observable<Joke> {
    let finalMovie : string = this.jokeWithCat + category;
    console.log(finalMovie)
    return this.http.get<Joke>(finalMovie)
  }
}
