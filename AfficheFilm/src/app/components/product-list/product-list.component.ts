import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  infoFilm: any;
  @Input()
  infoAlbum:any;
  constructor() { }

  ngOnInit(): void {
  }

}
