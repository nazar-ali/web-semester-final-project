import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/localStorage/localStorage.service';
import { CartSidebarComponent } from '../cart-sidar/cart-sidebar.component';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';

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

  constructor(private route: Router) // private cartService: CartService,
  // private elRef: ElementRef
  {}

  ngOnInit(): void {}

  toggleCart() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.route.navigate(['/app-cart-sidebar']);
    } else {
      console.log('Cart sidebar closed');
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
