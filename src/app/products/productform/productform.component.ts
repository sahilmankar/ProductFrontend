import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent {


  @Input() product :Product|undefined;
  @Output() formproduct=new EventEmitter();


  sendProduct() {
    this.formproduct.emit({product:this.product})
    }
   
 
}


