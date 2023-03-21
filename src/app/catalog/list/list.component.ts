import { Component, OnInit } from '@angular/core';
import { ProducthubService } from '../producthub.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor( private svc:ProducthubService) {
  }


 public flowers:any [] | undefined;

 ngOnInit(): void {
   //No Initialization needed for property  
  this.flowers= this.svc.getAllFlowers();

 }

}
