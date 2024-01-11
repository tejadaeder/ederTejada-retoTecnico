import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../util/models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productos-relacionados',
  templateUrl: './productos-relacionados.component.html',
  styleUrl: './productos-relacionados.component.css'
})
export class ProductosRelacionadosComponent implements OnInit{
  @Input() productId: any;
  productos_relacionados: Product [] = [];
  products: Product [] = [];
  productos_relacionados_list: Product [] = [];

  constructor(private productService: ProductService,
    ) 
    {

    }

    ngOnInit(): void {
      //simulando consumo de servicio
      this.productService.getProducts().subscribe((data) => {
        this.productos_relacionados = data;
        this.products = this.productos_relacionados.filter(item => item.id  == this.productId);

        this.productos_relacionados.forEach(producto => {
          const categoria = this.products[0].categoria;
          if(producto.categoria === categoria && producto.id != this.productId){
            this.productos_relacionados_list.push(producto)
            this.productos_relacionados_list.slice(this.productId)
          }

        });

      });
     

    }

    
    

}
