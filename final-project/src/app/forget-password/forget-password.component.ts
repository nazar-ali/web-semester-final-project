import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  standalone:true,
  imports:[ReactiveFormsModule,FormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = ''; 

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Email:', this.email);

    this.router.navigate(['/verify-token']);
  }
}
