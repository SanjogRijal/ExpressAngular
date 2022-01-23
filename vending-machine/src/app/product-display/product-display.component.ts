import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { ProductService } from 'src/services/product.service';

interface Product {
  _id ?: string
  name: string,
  price: string,
  cost: string,
}

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss'],
  providers: [ProductService]
})
export class ProductDisplayComponent implements OnInit {
  allProducts: any;
  imgSource: any;
  greaterThanStock: any;
  constructor(private service: ProductService) { 
    this.imgSource = '/assets/images/coke.jpg'
  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data) => 
    {
      this.allProducts= data;
    });
  }

  quantity(product: any, quantity: any) {
    console.log(<number>(quantity.target.value))
    console.log(quantity.target.value);
    let initialStock = product.stock;
    let stockAfterQuantity = initialStock - <number>quantity.target.value;

    console.log(stockAfterQuantity);

    if(stockAfterQuantity < 0 ) {
      product.stock = 10;
      this.greaterThanStock = true
    }
    if(quantity.target.value === "") {
      product.stock = initialStock
    }
    
    if(quantity.target.value <= initialStock) {
      product.stock = stockAfterQuantity;
    } 
    console.log(product)
  }

}
