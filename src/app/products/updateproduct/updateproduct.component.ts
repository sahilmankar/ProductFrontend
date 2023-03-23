import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductHubServiceService } from '../product-hub-service.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {


  product: Product |undefined;
  newproduct: any;
  constructor(private svc: ProductHubServiceService) { }

  updateProduct() {
    this.svc.updateProduct(this.newproduct).subscribe((response)=>{
      console.log(response);
    })

  }
  // it will recive product data from productfrom
  reciveProductform($event: any) {
    this.newproduct = $event.product;
  }

  // from getbyid
  reciveProduct($event: any) {
    this.product = $event.product
  }

}
