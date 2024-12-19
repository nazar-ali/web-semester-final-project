import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as cheerio from 'cheerio';

@Injectable({
  providedIn: 'root'
})
export class NewTrendsService {

  private url='/daraz/';
  constructor(private http: HttpClient) {}

  getData():Observable<{ productTitle: string; productPrice: string }[]> {
    return new Observable((observer) => {
      console.log('Service: Starting HTTP request to', this.url);

      this.http.get(this.url, { responseType: 'text' }).subscribe({
        next: (response: string) => {
          console.log('Service: Raw HTML response received');

          const $ = cheerio.load(response);

          // Extract headlines and descriptions separately
          const productTitles: string[] = [];
          const productPrices: string[] = [];

          // Find all card headlines
          $('[class="fs-card-title"]').each((_, element) => {
            const headline = $(element).text().trim();
            productTitles.push(headline);
          });

          // Find all card descriptions
          $('[class="price"]').each((_, element) => {
            const description = $(element).text().trim();
            productPrices.push(description);
          });

          // Pair headlines and descriptions by their index
          const cardDetails = productTitles.map((headline, index) => ({
            headline,
            description: productPrices[index] || 'No Price Available', // Fallback if description is missing
          }));

          console.log('Service: Parsed card details:', cardDetails);

          // if (cardDetails.length > 0) {
          //   observer.next(cardDetails);
          // } else {
          //   observer.error('No card details found.');
          // }
          observer.complete();
        },
        error: (err) => {
          console.error('Service: Error fetching HTML:', err);
          observer.error(err);
        },
        complete: () => {
          console.log('Service: HTTP request complete');
        }
      });
    });
  }
}
