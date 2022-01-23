import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductDisplayRoutingModule } from './product-display-routing.module';
import { ProductDisplayComponent } from './product-display.component';


@NgModule({
  declarations: [
    ProductDisplayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductDisplayRoutingModule
  ],
  exports: [ProductDisplayComponent]
})
export class ProductDisplayModule { }
