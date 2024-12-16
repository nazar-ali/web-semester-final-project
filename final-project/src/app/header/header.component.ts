import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/localStorage/localStorage.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private route: Router
  ) {}

  newTrendsClick() {
    console.log('new trends clicked');
    this.route.navigate(['[/app-new-trends]']);
  }
}
