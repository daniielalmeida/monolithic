import { Component } from '@angular/core';
import { Order, OrderService } from '../services/order.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  public orders: Order[] = [];

  constructor(private orderService: OrderService) {
  }
}
