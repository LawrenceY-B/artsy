import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/product/pages/home/home/home.component';
import { ProductcardComponent } from './modules/product/components/productcard/productcard.component';
import { FilterComponent } from './modules/product/components/filter/filter.component';
import { HeaderComponent } from './modules/product/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
