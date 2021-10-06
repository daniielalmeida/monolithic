import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.ORDER_MICROSERVICE_URL + 'api/Order');
  }
  
}

export class Order {
  id: number;
  productOrders: ProductOrder[];
  customerName: string;
  grandTotal: number;
  totalPaid: number;
  status: number;
  dateTime: Date;
}

export class OrderExtended extends Order {
  statusName: string;
}

export class ProductOrder {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  amount: number;
  discountPer: number;
  totalAmount: number;
}