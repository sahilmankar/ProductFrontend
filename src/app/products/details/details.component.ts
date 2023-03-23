import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input() product: Product | undefined;

  onUpdate(e: any) {
    if (this.product != undefined)
      this.product.unitPrice = e.counter;
  }

}
