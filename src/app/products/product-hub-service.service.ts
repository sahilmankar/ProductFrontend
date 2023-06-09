import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductHubServiceService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    let url =  "http://localhost:5223/product/getall";
    return this.http.get<any>(url);
  }

  getProductById(productId:number):Observable<Product>{
    let url= "http://localhost:5223/product/getbyid/"+productId;
    return this.http.get<Product>(url);
  }
  insertProduct(product:Product):Observable<any>{
    let url= "http://localhost:5223/product/insert";
    return this.http.post<Product>(url,product);
  }

  deleteProduct(productId:number):Observable<any>{
    let url= "http://localhost:5223/product/delete/"+productId;
    return this.http.delete<any>(url);
  }

  updateProduct(product:Product):Observable<any>{
    let url= "http://localhost:5223/product/update"
    return this.http.put<any>(url,product);
  }
}
