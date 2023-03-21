import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

@Input ()  product:any;


constructor() { }

  ngOnInit(): void {

  }

//Event handler which is part of Parent component
onUpdate(ee:any){
  this.product.likes=ee.count;
}
}
