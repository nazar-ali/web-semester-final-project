import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  name:string='';
  email:string='';
  password:string='';
  conf_password:string='';
  nameMsg='';
  emailMsg='';
  passwordMsg='';
  conf_passwordMsg='';
  formMsg='';

  validator() {
    if(this.nameMsg == '  ' && this.emailMsg == '  ' && this.passwordMsg == '  ' && this.conf_passwordMsg == '  '){
      this.formMsg=''
    } else {
      this.formMsg='Some Credentials are Wrong';
    }
  }

  checkName() {
    if(this.name==''){
      this.nameMsg = 'Name is required.';
    }
    else if(this.name.length<4){
      this.nameMsg = 'Maximum 4 characters long.';
    }
    else {
      this.nameMsg = '  ';
    }
  }
  checkEmail(){
    const pattern="^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    if(this.email==''){
      this.emailMsg = 'Email is required.';
    }
    else if(!this.email.match(pattern)){
      this.emailMsg='Invalid email address.';
    }
    else{
      this.emailMsg = '  ';
    }
  }
  checkPassword(){
    if(this.password=='') {
      this.passwordMsg = 'Password is required.'
    }
    else if(this.password.length<8){
      this.passwordMsg = 'Maximum 8 characters long.';
    }
    else{
      this.passwordMsg = '  ';
    }
  }
  checkPassword_match() {
   if(this.password != this.conf_password){
     this.conf_passwordMsg='Password does not match.';
   }
   else{
     this.conf_passwordMsg = '  ';
   }
  }
}
