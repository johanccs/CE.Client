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
  header: string = 'Orders in progress';

  constructor(private orderService: OrderService ) { }

  ngOnInit(): void {
    this.loadLiveOrders();
  }

  loadLiveOrders(){
    this.header = "Orders in progress - Fetching orders. Please wait";
    this.orderService.getOrdersInProgress().subscribe(data=> {
       this.orders = data as Order[];
       this.header = "Order in progress";
    }, err => {
      alert(err);
  
    });

  }
}
