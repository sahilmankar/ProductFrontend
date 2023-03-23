import { Component } from '@angular/core';
import { ProductHubServiceService } from '../product-hub-service.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent {

  productId: any;
  constructor(private svc: ProductHubServiceService) { }

  reciveProductId($event: any) {
    this.productId = $event.product.productId;
    console.log(this.productId);

  }
  deleteProduct() {
    console.log(this.productId);
    this.svc.deleteProduct(this.productId).subscribe((response) => {
      console.log(response);
    })
  }
}
