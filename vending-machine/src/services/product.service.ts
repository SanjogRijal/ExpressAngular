import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL: string;
  SECONDARY_URL: string;
  constructor(private http: HttpClient ) { 
    this.BASE_URL = environment.baseUrl;
    this.SECONDARY_URL = "/products"
    console.log(this.BASE_URL)
    this.getAllProducts = this.getAllProducts.bind(this);
  }

  getAllProducts =  () => {
    return this.http.get(`${this.BASE_URL}${this.SECONDARY_URL}/getAll`);
  }

  clearProducts = () => {
  
  }

}
