import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email_login:string='';
  password_login:string='';
  emailMsg_login='';
  passwordMsg_login='';
  formMsg_login='';

  validator_login() {
    if(this.emailMsg_login == '  ' && this.passwordMsg_login == '  '){
      this.formMsg_login=''
    } else {
      this.formMsg_login='Some Credentials are Wrong';
    }
  }
  checkEmail_login(){
    const patternEmail="^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    if(this.email_login==''){
      this.emailMsg_login = 'Email is required.';
    }
    else if(!this.email_login.match(patternEmail)){
      this.emailMsg_login='Invalid email address.';
    }
    else{
      this.emailMsg_login = '  ';
    }
  }
  checkPassword_login(){
    if(this.password_login=='') {
      this.passwordMsg_login = 'Password is required.';
    }
    else if(this.password_login.length<8){
      this.passwordMsg_login = 'Maximum 8 characters long.';
    }
    else{
      this.passwordMsg_login = '  ';
    }
  }
}
