import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CounterComponent,
    ListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListComponent
  ]
})
export class CatalogModule { }
