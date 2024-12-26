// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   ChangeDetectorRef,
// } from '@angular/core';
// import { NgForOf } from '@angular/common';
// import { cardDatails } from '../shared/models/CardDetails';
// import { CartItem } from '../shared/models/CartItem';
// import { CartSidebarComponent } from '../cart-sidar/cart-sidebar.component';

// @Component({
//   selector: 'app-add-to-cart',
//   standalone: true,
//   imports: [NgForOf, CartSidebarComponent],
//   templateUrl: './add-to-cart.component.html',
//   styleUrls: ['./add-to-cart.component.css'],
// })
// export class AddToCartComponent {
//   isSidebarOpen: boolean = false;
//   selectedProduct: CartItem | null = null;
//   @Input() product!: CartItem;
//   @Output() addToCartEvent = new EventEmitter<CartItem>();

//   cartItems: CartItem[] = [];

//   constructor(private cdRef: ChangeDetectorRef) {}

//   toggleSidebar(): void {
//     this.isSidebarOpen = !this.isSidebarOpen;
//   }

//   onAddToCart() {
//     console.log('Adding to cart:', this.product);

//     const existingProduct = this.cartItems.find(
//       (item) => item.id === this.product.id
//     );

//     if (!existingProduct) {
//       this.cartItems.push({ ...this.product });
//     } else {
//       this.cartItems.push(this.product);
//     }

//     console.log('Updated cart items:', this.cartItems);

//     if (!this.isSidebarOpen) {
//       this.isSidebarOpen = true;
//     }
//   }

// }
