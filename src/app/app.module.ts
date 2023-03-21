import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogModule } from './catalog/catalog.module';
import { GitModule } from './git/git.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CatalogModule,
    GitModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
