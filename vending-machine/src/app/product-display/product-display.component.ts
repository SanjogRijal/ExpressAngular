import { Component, OnInit } from '@angular/core';
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
  constructor(private service: ProductService) { 
    this.imgSource = '/assets/images/coke.jpg'
  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data) => 
    {
      this.allProducts= data;
    });
  }

  quantity(productName: string, quantity: any) {
    console.log(productName, quantity);
  }

}
