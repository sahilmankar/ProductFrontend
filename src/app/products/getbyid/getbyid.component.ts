import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { ProductHubServiceService } from '../product-hub-service.service';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.css']
})
export class GetbyidComponent {

  productId: number | undefined;
  product: Product | undefined;

  @Output() sendProduct =new EventEmitter();
  constructor(private svc: ProductHubServiceService) { }

  getProductById(id: any) {
    this.svc.getProductById(id).subscribe((response) => {
      this.product = response;
      this.sendProduct.emit({product:this.product});
      console.log(this.product);
    })

  }


}
