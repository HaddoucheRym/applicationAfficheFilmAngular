import { Component, OnInit } from '@angular/core';
import Album from 'src/app/models/album';
import Film from 'src/app/models/film';
import { AlbumSerService } from 'src/app/services/album-ser.service';
import { FilmSerService } from 'src/app/services/film-ser.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  //declaration de la liste des films
films : Film[]= []

//declaration de la liste d'albums
albums: Album[]=[]

  constructor(private filmService: FilmSerService, private albumService: AlbumSerService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((filmsObserves) =>{
      this.films= filmsObserves;
    })

    this.albumService.getAlbums().subscribe((albumObserves) =>{
      this.albums= albumObserves;
    })
  }

}
