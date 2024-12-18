import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../../app/cart/cart.component';
// import { HeaderComponent } from '../header/header.component';
import { NgFor } from '@angular/common';
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

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('userSignupData');
    this.router.navigate(['/login']);
  }
  slides = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9ue0x4ndDd_KXFYivZsajFdBWDq1oWfjSw&s',
      title: 'Iphone 16',
      greentext: 'Highlight',
      Price: '1000$',
    },
    {
      img: '../../assets/img/brand2.png',
      title: 'Laptop',
      greentext: 'Highlight',
      Price: '700$',
    },
    {
      img: '../../assets/img/h4-slide3.png',
      title: 'Pillow',
      greentext: 'Highlight',
      Price: '40$',
    },
  ];
  pushToCart() {}
  ngOnInit(): void {
    console.log(this.slides);
  }
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length; // Loop to the beginning
  }
  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length; // Loop to the end
  }
}
