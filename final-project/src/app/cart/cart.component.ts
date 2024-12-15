import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.getCartItems().subscribe((data) => {
      this.cart = data;
    });
  }

  addToCart(product: CartItem): void {
    const newItem: CartItem = {
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
    };
    this.cartService.addToCart(newItem).subscribe((addedItem) => {
      this.cart.push(addedItem);
    });
  }

  removeFromCart(item: CartItem): void {
    if (item.id) {
      this.cartService.removeFromCart(item.id).subscribe(() => {
        this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
      });
    }
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe(() => {
      this.cart = [];
    });
  }

  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
