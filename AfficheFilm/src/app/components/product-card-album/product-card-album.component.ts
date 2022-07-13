import { Component, Input, OnInit } from '@angular/core';
import albums from 'src/app/data/album';
import Album from 'src/app/models/album';

@Component({
  selector: 'app-product-card-album',
  templateUrl: './product-card-album.component.html',
  styleUrls: ['./product-card-album.component.css']
})
export class ProductCardAlbumComponent implements OnInit {
 // public infoAlbum: any ;
 @Input()
 infoAlbum : any;

  constructor() { }

  ngOnInit(): void {
 //this.infoAlbum=albums;

  }

}
