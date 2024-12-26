import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
// import { ChangeDetectorRef } from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-dash-board',
  imports: [
    CartComponent,
    NgFor,
    NgIf,
    HeaderComponent,
    NgClass,
    FooterComponent,
  ],
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  standalone: true,
})
export class DashboardComponent {
  currentSlide = 1; // Start at the first slide
  slides = [
    {
      image:
        'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
    },
    {
      image:
        'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
    },
    {
      image:
        'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    },
    {
      image:
        'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
    },
  ];

  goToSlide(slide: number) {
    // If slide number is below 1, loop to the last slide.
    if (slide < 1) {
      this.currentSlide = this.slides.length;
    }
    // If slide number exceeds the number of slides, loop to the first slide.
    else if (slide > this.slides.length) {
      this.currentSlide = 1;
    } else {
      this.currentSlide = slide;
    }
  }
}
