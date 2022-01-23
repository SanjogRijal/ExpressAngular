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
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data) => 
    {
      this.allProducts= data;
    });
  }

}
