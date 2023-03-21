import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitComponent } from './git.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GitComponent
  ],
  exports:[
GitComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class GitModule { }


