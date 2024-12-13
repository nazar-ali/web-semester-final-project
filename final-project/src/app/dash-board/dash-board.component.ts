import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashboardComponent {
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
