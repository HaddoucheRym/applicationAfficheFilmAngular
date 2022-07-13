import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardAlbumComponent } from './product-card-album.component';

describe('ProductCardAlbumComponent', () => {
  let component: ProductCardAlbumComponent;
  let fixture: ComponentFixture<ProductCardAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
