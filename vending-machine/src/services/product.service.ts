import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string;
  constructor(private http: HttpClient ) { 
    this.baseUrl = environment.baseUrl;
    this.getAllProducts = this.getAllProducts.bind(this);
  }

  getAllProducts =  () => {
    return this.http.get(`http://localhost:8000/product/getAll`);
  }

  clearProducts = () => {
  
  }

}
