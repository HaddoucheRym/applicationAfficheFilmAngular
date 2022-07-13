import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Film from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmSerService {
  //url de mon json serveur
  private url ='http://localhost:3000';

  //injecter la dependance de httpClient

  constructor(private httpClient: HttpClient) { }
//recuperer les données
 /**
  * Il renvoie un Observable d'un tableau d'objets Film
  * @returns Une observable d'un ensemble de films
  */
  getFilms():Observable<Film[]>{
return this.httpClient.get<Film[]>(`${this.url}/films`)
  }

  getFilm(id:number):Observable<Film>{
    return this.httpClient.get<Film>(`${this.url}/films/${id}`)
  }

  //creer une donnée et l'ajouter dans la base des données
  postFilm(film:Film): Observable<Film>{
    return this.httpClient.post<Film>(`${this.url}/films`, film);
  }
  
  
  //suprimer des données de la base des données
  deleteFilm(id:number): Observable<Film>{
    return this.httpClient.delete<Film>(`${this.url}/films/${id}` );
  }
  
  //modifier une donnée et la mettre a jour dans la base des données
  putFilm(film:Film): Observable<Film>{
    return this.httpClient.put<Film>(`${this.url}/films/{film.id}`, film);
  }

}
