import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../../app/shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.apiUrl}/cart`);
  }

  addToCart(item: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(`${this.apiUrl}/cartDetail`, item);
  }

  removeFromCart(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }
}
