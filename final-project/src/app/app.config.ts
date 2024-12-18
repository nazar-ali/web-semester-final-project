import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CartSidebarComponent } from './cart-sidar/cart-sidebar.component';

export const appConfig: ApplicationConfig = {
  providers: [
    CartSidebarComponent,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
  ],
};
