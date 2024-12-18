import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { NgFor, NgIf } from '@angular/common';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { CartSidebarComponent } from '../cart-sidar/cart-sidebar.component'; // Import Sidebar
import { cardDatails } from '../shared/models/CardDetails';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, AddToCartComponent, CartSidebarComponent], // Added Sidebar
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'], // Correct styleUrls property
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];
  // cardDetails: cardDatails[] = [];
  loading: boolean = true;
  selectedProduct: CartItem | null = null; // For sidebar
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems(); // Fetch card details
    // this.getCardDetail();
  }

  loadCartItems(): void {
    this.loading = true;
    this.cartService.getCartItems().subscribe((data) => {
      this.cart = data || [];
      console.log(data);
      this.loading = false;
    });
  }

  // getCardDetail(): void {
  //   this.cartService.getCardDetail().subscribe(
  //     (data) => {
  //       this.cardDetails = data;
  //     },
  //     (error) => {
  //       console.error('Error loading card details:', error);
  //     }
  //   );
  // }

  addToCart(products: CartItem): void {
    this.selectedProduct = products; // Set selected product for sidebar
    const newItem: CartItem = {
      name: products.name,
      price: products.price,
      category: products.category,
      image: products.image,
    };
    this.cartService.addToCart(newItem).subscribe(
      (addedItem) => {
        this.cart.push(addedItem);
      },
      (error) => {
        console.error('Error adding to cart:', error);
      }
    );
  }

  removeFromCart(item: CartItem): void {
    if (item.id) {
      this.cartService.removeFromCart(item.id).subscribe(
        () => {
          this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
          if (this.selectedProduct?.id === item.id) {
            this.selectedProduct = null; // Clear sidebar if removed item is selected
          }
        },
        (error) => {
          console.error('Error removing from cart:', error);
        }
      );
    }
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe(
      () => {
        this.cart = [];
        this.selectedProduct = null; // Clear sidebar when cart is cleared
      },
      (error) => {
        console.error('Error clearing cart:', error);
      }
    );
  }

  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
