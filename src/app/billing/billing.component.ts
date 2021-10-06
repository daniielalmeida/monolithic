import { Component } from '@angular/core';
import { Order, OrderService } from '../services/order.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {

  public orders: Order[] = [];

  constructor(private orderService: OrderService) {
  }
}
