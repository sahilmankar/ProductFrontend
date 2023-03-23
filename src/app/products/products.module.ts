import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { GetbyidComponent } from './getbyid/getbyid.component';
import { InsertproductComponent } from './insertproduct/insertproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ProductformComponent } from './productform/productform.component'


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CounterComponent,
    GetbyidComponent,
    InsertproductComponent,
    DeleteproductComponent,
    UpdateproductComponent,
    ProductformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    ListComponent,
    GetbyidComponent,
    InsertproductComponent,
    DeleteproductComponent,
    UpdateproductComponent
  ]
})
export class ProductsModule { }
