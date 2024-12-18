import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from './dash-board/dash-board.component';
import { AuthGuard } from '../guard/auth.guard';
import { NewTrendsComponent } from './new-trends/new-trends.component';

export const routes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-sign-up', component: SignUpComponent },
  { path: 'app-forget-password', component: ForgetPasswordComponent },
  { path: 'app-new-trends', component: NewTrendsComponent },
  {
    path: 'app-dash-board',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/app-sign-up', pathMatch: 'full' },
  // { path: '**', redirectTo: '/app-login' },
];
