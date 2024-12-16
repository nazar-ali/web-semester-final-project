import { Component } from '@angular/core';
import {NewTrendsService} from "../../services/newTrends/new-trends.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-new-trends',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './new-trends.component.html',
  styleUrl: './new-trends.component.css'
})
export class NewTrendsComponent {
    details: {productTitle:string; productPrice:string}[]=[];
    loading=false;
  errorMessage: string | null = null;

  constructor(private NewTrendsService: NewTrendsService) {}

  get_Title_Price_from_Daraz(): void {
    this.loading = true;

    this.NewTrendsService.getData().subscribe({
      next: (data) => {
        this.details = data;
        console.log('Component: Received card details:', data);
      },
      error: (error) => {
        this.errorMessage = `Error fetching card details: ${error}`;
        console.error('Component: Error:', error);
      },
      complete: () => {
        this.loading = false;
        console.log('Component: Subscription complete');
      }
    });
  }
}
