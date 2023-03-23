import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  productId: any;
  product: Product | undefined;

  reciveProduct($event: any) {
    console.log("event catched")
    this.product = $event.product;
    console.log(this.productId);
  }
}
