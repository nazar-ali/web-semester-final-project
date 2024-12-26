import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CartItem } from '../../app/shared/models/CartItem';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { cardDatails } from '../shared/models/CardDetails';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-cart-sidebar',
  standalone: true,
  imports: [CommonModule, CheckoutComponent],
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.css'],
})
export class CartSidebarComponent implements OnInit {
  // @Input() cartItems: CartItem[] = [];
  @Input() isOpen: boolean = false;
  // @Output() toggleSidebar = new EventEmitter<void>();
  // @Output() removeItem = new EventEmitter<number>();
  totalamount = 0;

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCardDetails();
  }

  getCardDetails() {
    this.cartService.getCardDetail().subscribe({
      next: (items: cardDatails[]) => {
        this.cartItems = items;
        console.log(this.cartItems);
      },
      error: (err) => {
        console.log('error in cardDetail');
      },
    });

    if (!this.isOpen) {
      this.isOpen = true;
    }
  }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  removeItem(index: number): void {
    console.log('Removing item at index:', index);
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
      console.log('Updated cart items after removal:', this.cartItems);
    }
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // removeItemFromCart(index: number): void {
  //   console.log('Emitting remove item event for index:', index);
  //   this.removeItem.emit(index);
  // }
  closeSidebar(): void {
    this.isOpen = !this.isOpen;
    // this.toggleSidebar.emit();
  }
}
