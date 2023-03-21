import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProducthubService {

 
  private  flowers:any =[];

  constructor() { 

    this.flowers=[
      {"title":"Lotus","description":"Worship flower","unitprice":25,"quantity":100,"likes":120,"imageurl":"/assets/images/lotus.jpg"},
      {"title":"Gerbera","description":" flower","unitprice":250,"quantity":100,"likes":150,"imageurl":"/assets/images/gerbera.jpg"},
      {"title":"Rose","description":"Symbol of fake love ","unitprice":10,"quantity":100,"likes":1200,"imageurl":"/assets/images/rose.jpg"}
    ];

    }

   public getAllFlowers():any{
    return this.flowers;
   }

}
