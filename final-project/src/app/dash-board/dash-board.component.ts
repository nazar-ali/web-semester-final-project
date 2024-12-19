import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { ChangeDetectorRef } from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
import {NgFor} from '@angular/common';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-dash-board',
  imports: [CartComponent, NgFor, HeaderComponent],
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  standalone: true,
})
export class DashboardComponent {
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router,
  private cdr: ChangeDetectorRef) {}

  logout() {
    localStorage.removeItem('userSignupData');
    this.router.navigate(['/app-login']);
  }
  slides = [
    {
      img: 'https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg',
      title: 'Iphone 16',
      greentext: 'Highlight',
      Price: '$1000',
    },
    {
      img: 'https://via.placeholder.com/400x300',
      title: 'Laptop',
      greentext: 'Highlight',
      Price: '$700',
    },
    {
      img: 'https://via.placeholder.com/400x300',
      title: 'Pillow',
      greentext: 'Highlight',
      Price: '$40',
    },
  ];

  currentIndex = 0;

  getTransformStyle(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide(): void {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first slide
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1; // Loop back to the last slide
    }
  }
}
