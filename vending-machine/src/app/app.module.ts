import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// import { ProductDisplayModule } from './product-display/product-display.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductDisplayModule } from './product-display/product-display.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProductDisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
