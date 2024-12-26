import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { NgFor, NgIf } from '@angular/common';
import { cardDatails } from '../shared/models/CardDetails';
import { CartSidebarComponent } from '../cart-sidar/cart-sidebar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor, CartSidebarComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  loading: boolean = true;
  cart: CartItem[] = [];
  cartItems: cardDatails[] = [];
  isSidebarOpen: boolean = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.getCartItems().subscribe({
      next: (items: CartItem[]) => {
        this.cart = items;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error loading cart items:', err);
        this.loading = false;
      },
    });
  }

  addToCart(product: cardDatails): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.loadCartItems();
      },
    });
  }

  removeItemFromCart(id: number | undefined): void {
    if (id !== undefined) {
      this.cartService.removeFromCart(id).subscribe({
        next: () => {
          console.log(`Item with id ${id} removed from cart.`);
          this.loadCartItems();
        },
        error: (err) => console.error('Error removing item from cart:', err),
      });
    } else {
      console.error('Invalid product id, cannot remove item.');
    }
  }
}
