import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {
  @Input() product: Product | undefined;
  
  
    path="assets/";
 
  onUpdate(e: any) {
    if (this.product != undefined){
      this.product.unitPrice = e.counter;
      // this.product.imageUrl="assets/"+this.product.imageUrl;
    }
  }

}
