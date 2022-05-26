import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/nav/main-nav/main-nav.component';
import { OrdersByStatusComponent } from './components/orders-by-status/orders-by-status.component';
import { TopFiveProdsComponent } from './components/top-five-prods/top-five-prods.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TopFiveProdsComponent,
    OrdersByStatusComponent,
    UpdateStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
