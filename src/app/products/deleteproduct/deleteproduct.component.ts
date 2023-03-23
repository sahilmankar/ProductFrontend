import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductHubServiceService } from '../product-hub-service.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent {

  productId: any;
  product:Product|undefined;
  status: boolean | undefined;

  constructor(private svc: ProductHubServiceService) { }

  reciveProductId($event: any) {
    this.product=$event.product;
    this.productId = $event.product.productId;
    console.log(this.productId);

  }
  deleteProduct() {
    console.log(this.productId);
    this.svc.deleteProduct(this.productId).subscribe((response) => {
      this.status = response;
      console.log(response);
    })
  }
}
