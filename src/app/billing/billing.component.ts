import { Component, OnInit } from '@angular/core';
import { OrderExtended, OrderService } from '../services/order.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  public orders: OrderExtended[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      data.forEach(o => {
        let extendedOrder: OrderExtended = {
          id: o.id,
          productOrders: o.productOrders,
          customerName: o.customerName,
          grandTotal: o.grandTotal,
          totalPaid: o.totalPaid,
          status: o.status,
          dateTime: o.dateTime,
          statusName: (o.status === 0) ? 'pending' : (o.status === 1) ? 'delivered' : (o.status === 2) ? 'returned' : 'cancelled'
        };
        this.orders.push(extendedOrder);
      });
    });
  }
}
