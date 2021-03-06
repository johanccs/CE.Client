import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersByStatusComponent } from './components/orders-by-status/orders-by-status.component';
import { TopFiveProdsComponent } from './components/top-five-prods/top-five-prods.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';

const routes: Routes = [
  {path: "in_prog", component: OrdersByStatusComponent},
  {path: "top_five", component: TopFiveProdsComponent},
  {path: "update", component: UpdateStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
