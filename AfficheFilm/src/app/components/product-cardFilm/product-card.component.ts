import { Component, Input, OnInit } from '@angular/core';
import albums from 'src/app/data/album';
import films from 'src/app/data/films';
import Film from 'src/app/models/film';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  // public infoFilm : any ;
@Input()
infoFilm: any;



  constructor() { }

  ngOnInit(): void {
  // this.infoFilm=films;
  }
 

}
