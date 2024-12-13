import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from './dash-board/dash-board.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-sign-up', component: SignUpComponent },
  { path: 'app-forget-password', component: ForgetPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
