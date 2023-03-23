import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductHubServiceService } from '../product-hub-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[]|undefined;
  constructor(private svc: ProductHubServiceService) { }
  ngOnInit(): void {

  }

  getAll(): void {
    this.svc.getProducts().subscribe((response) => {
      this.products = response;
      console.log(this.products);
    })

  }
}


