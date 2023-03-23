import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductHubServiceService } from '../product-hub-service.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {


  product: Product|any;
 
  constructor(private svc: ProductHubServiceService) { }

  updateProduct() {
    this.svc.updateProduct(this.product).subscribe((response)=>{
      console.log(response);
    })

  }

  // from getbyid
  reciveProduct($event: any) {
    this.product = $event.product
  }

}
