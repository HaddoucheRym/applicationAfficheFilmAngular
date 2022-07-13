import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Album from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumSerService {
  //url de mon json serveur
private url ='http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
  //recuperer les données
  getAlbums():Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${this.url}/albums`)
      }
    
      getAlbum(id:number):Observable<Album>{
        return this.httpClient.get<Album>(`${this.url}/albums/${id}`)
      }
    
      //creer une donnée et l'ajouter dans la base des données
      postAlbum(album: Album): Observable<Album>{
        return this.httpClient.post<Album>(`${this.url}/albums`, album);
      }
      
      
      //suprimer des données de la base des données
      deleteAlbum(id:number): Observable<Album>{
        return this.httpClient.delete<Album>(`${this.url}/albums/${id}` );
      }
      
      //modifier une donnée et la mettre a jour dans la base des données
      putAlbum(album:Album): Observable<Album>{
        return this.httpClient.put<Album>(`${this.url}/albums/{album.id}`, album);
      }
    
}
