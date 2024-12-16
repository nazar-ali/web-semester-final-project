import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { NgFor, NgIf } from '@angular/common';
import { AddToCartComponent } from "../add-to-cart/add-to-cart.component";
import {cardDatails} from "../shared/models/CardDetails";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, AddToCartComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'], // Note: Corrected styleUrl to styleUrls
})
export class CartComponent implements OnInit {
  @Input() title!: string;
  @Input() price!: number;

  cart: CartItem[] = [];
  cardDetails: cardDatails[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems(); // Fetch card details
    this.getCardDetail()
  }

  loadCartItems(): void {
    this.cartService.getCartItems().subscribe((data) => {
      this.cart = data;
    });
  }

  getCardDetail(): void {
    this.cartService.getCardDetail().subscribe((data) => {
      this.cardDetails = data;
    }); // Fetch card details
  }


  addToCart(products:CartItem): void {
    const newItem: CartItem = {
      name: products.name,
      price: products.price,
      category:products.category ,
      image: products.image,
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
