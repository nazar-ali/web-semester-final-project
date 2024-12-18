import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../shared/models/CartItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.css'],
})
export class CartSidebarComponent {
  @Input() cartItems: CartItem[] = [];
  @Input() isOpen: boolean = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() removeItem = new EventEmitter<number>();

  onRemoveItem(index: number): void {
    console.log('Emitting remove item event for index:', index);
    this.removeItem.emit(index);
  }
  closeSidebar(): void {
    this.isOpen = !this.isOpen;
    this.toggleSidebar.emit();
  }
}
