import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { ProductHubServiceService } from '../product-hub-service.service';

@Component({
  selector: 'app-insertproduct',
  templateUrl: './insertproduct.component.html',
  styleUrls: ['./insertproduct.component.css']
})
export class InsertproductComponent {


  product: Product = {
    productId: 0,
    productTitle: '',
    description: '',
    stockAvailable: 0,
    unitPrice: 0,
    imageUrl: '',
    categoryId: 0
  };
  status: boolean | undefined;
  constructor(private svc: ProductHubServiceService) { }

  reciveProduct($event: any) {
    this.product = $event.product;
  }
  insertProduct() {
    this.svc.insertProduct(this.product).subscribe((response) => {
      this.status = response;
      console.log(response);
    })
  }
}
