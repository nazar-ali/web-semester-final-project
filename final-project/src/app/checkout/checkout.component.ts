import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'], // Optional
})
export class CheckoutComponent {
  @Input() totalAmount: number = 0; // Input to receive the total amount
  @Output() calculateTotal = new EventEmitter<void>(); // Emitted when recalculating the total

  customerDetails = {
    address: '',
    phoneNumber: '',
  };

  onBuy(): void {
    if (
      this.customerDetails.address.trim() &&
      this.customerDetails.phoneNumber.trim()
    ) {
      alert(
        `Your products have been purchased!\nTotal Amount: $${this.totalAmount}`
      );
    } else {
      alert('Please fill in all the details before purchasing.');
    }
  }
}
