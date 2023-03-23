import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHubServiceService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    let url =  "http://localhost:5223/product/getall";
    return this.http.get<any>(url);
  }
}
