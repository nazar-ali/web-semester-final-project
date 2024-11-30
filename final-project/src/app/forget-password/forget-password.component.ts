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
  email_msg='';

  constructor(private router: Router) {}

  onSubmit() {
    const patternEmail="^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    if(this.email==''){
      this.email_msg = 'Email is required.';
    }
    else if(!this.email.match(patternEmail)){
      this.email_msg='Invalid email address.';
    }
    else {
      this.email_msg = '';

      console.log('Email:', this.email);
      this.router.navigate(['/verify-token']);
    }
  }
}
