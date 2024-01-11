import { Component } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css'
})
export class ProductGalleryComponent {
  products = [
    { "id": 1, "name": "Blanik", "description": "Deshidratador de alimentos bda020 blanik", "price": 15.75, "imagen": "assets/artifact1.jpg", "categoria": "Electro" },
    { "id": 2, "name": "Riccaddona", "description": "01 Und Riccadonna Prosecco x 750ml", "price": 20.50, "imagen": "assets/artifact2.jpg", "categoria": "Bebidas" },
    { "id": 3, "name": "Tous", "description": "Perfume tous frag tous kids girl edt 100 ml", "price": 20.50, "imagen": "assets/artifact3.jpg", "categoria": "Belleza" },
    { "id": 4, "name": "Bestway", "description": "Flotador de plastico pegazo 41121 bestway", "price": 12.50, "imagen": "assets/artifact4.jpg", "categoria": "Deportes" },
    { "id": 5, "name": "Cacharel", "description": "Perfume cacharel frag yes i am mujer edp 50 ml", "price": 35.20, "imagen": "assets/artifact5.jpg", "categoria": "Belleza" },
    { "id": 6, "name": "Wahl", "description": "Máquina de cortar wahl easy cut acero inox negro", "price": 112.50, "imagen": "assets/artifact6.jpg", "categoria": "Electro" },
    { "id": 7, "name": "The Ordinary", "description": "The ordinary squalane cleanser 1.7 oz/ 50 ml", "price": 48.00, "imagen": "assets/artifact7.jpg", "categoria": "Belleza" },
    { "id": 8, "name": "Barbie", "description": "Lentes de barbie para niña , plastico , buena calidad", "price": 10.00, "imagen": "assets/artifact8.jpg", "categoria": "Juguetes" }

  ];

  constructor() {}

  ngOnInit() {
  }
}
