import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/localStorage/localStorage.service';
import { CartSidebarComponent } from '../cart-sidar/cart-sidebar.component';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import { Subscription } from 'rxjs';
import { CartItem } from '../shared/models/CartItem';
import { cardDatails } from '../shared/models/CardDetails';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterOutlet,
    RouterLink,
    CartSidebarComponent,
    NgClass,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  cartItems: CartItem[] = [];

  constructor(private route: Router, private cartService: CartService) {}

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

  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50; // Change color after scrolling 50px
  }

  toggleCart() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.route.navigate(['/app-cart-sidebar']);
    } else {
      console.log('Cart sidebar closed');
    }
  }

  removeItem(index: number): void {
    console.log('Removing item at index:', index);
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
      console.log('Updated cart items after removal:', this.cartItems);
    }
  }

  // @HostListener('document:click', ['$event.target'])
  // onOutsideClick(target: HTMLElement) {
  //   const clickedInside = this.elRef.nativeElement.contains(target);
  //   if (!clickedInside && this.isOpen) {
  //     this.isOpen = false;
  //     console.log('Clicked outside, sidebar closed');
  //   }
  // }

  newTrendsClick() {
    console.log('New trends clicked');
    this.route.navigate(['/app-new-trends']);
  }
}
