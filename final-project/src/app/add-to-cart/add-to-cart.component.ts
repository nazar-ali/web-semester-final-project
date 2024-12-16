import { Component, Input } from '@angular/core';
import {NgForOf} from "@angular/common";
import {cardDatails} from "../shared/models/CardDetails";

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'], // Corrected "styleUrl" to "styleUrls"
})
export class AddToCartComponent {

  @Input() cardDetails!: cardDatails[];
}
