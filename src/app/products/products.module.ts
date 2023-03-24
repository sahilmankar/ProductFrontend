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
import { ProductformComponent } from './productform/productform.component';
import { SearchComponent } from './search/search.component'
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BarchartComponent } from './barchart/barchart.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';


export const routes:Routes =[
  {path:'list' , component:ListComponent},
  {path:'search',component:SearchComponent},
  {path:'insert',component:InsertproductComponent},
  {path:'update',component:UpdateproductComponent},
  {path:'delete',component:DeleteproductComponent},
  {path:'barchart',component:BarchartComponent},
  {path:'login',component:LoginComponent},
  
]
@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CounterComponent,
    GetbyidComponent,
    InsertproductComponent,
    DeleteproductComponent,
    UpdateproductComponent,
    ProductformComponent,
    SearchComponent,
    NavbarComponent,
    BarchartComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgChartsModule
  ],
  exports:[
    ListComponent,
    GetbyidComponent,
    InsertproductComponent,
    DeleteproductComponent,
    UpdateproductComponent,
    SearchComponent,
    NavbarComponent
  ]
})
export class ProductsModule { }
