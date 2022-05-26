import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-by-status',
  templateUrl: './orders-by-status.component.html',
  styleUrls: ['./orders-by-status.component.css']
})
export class OrdersByStatusComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService ) { }

  ngOnInit(): void {
    
    this.loadLiveOrders();
  }


  loadDummyOrder() {
    this.orders = [
      new Order(1, '2022-01-01', 20),
      new Order(2, '2022-03-01', 12),
    ]
  }

  loadLiveOrders(){
    this.orderService.getOrdersInProgress().subscribe(data=> {
       this.orders = data as Order[];
    });
  }
}
