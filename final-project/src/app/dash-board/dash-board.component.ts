import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashboardComponent {
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('userSignupData');
    this.router.navigate(['/login']);
  }
}
