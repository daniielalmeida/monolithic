import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<ProductOrder[]> {
    return this.http.get<ProductOrder[]>(environment.ORDER_MICROSERVICE_URL + '/Orders');
  }
  
}

export class Order {
  Id: number;
  ProductOrders: ProductOrder[];
  CustomerName: string;
  GrandTotal: number;
  TotalPaid: number;
  Status: number;
  DateTime: Date;
}

export class ProductOrder {
  Id: number;
  ProductId: number;
  ProductName: string;
  Quantity: number;
  Amount: number;
  DiscountPer: number;
  TotalAmount: number;
}