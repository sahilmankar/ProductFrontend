import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    ListComponent
  ]
})
export class ProductsModule { }
