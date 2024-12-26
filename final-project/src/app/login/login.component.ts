import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../../services/localStorage/localStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email_login: string = '';
  password_login: string = '';
  emailMsg_login = '';
  passwordMsg_login = '';
  formMsg_login = '';

  constructor(
    private localStorageService: LocalStorageService,
    private route: Router
  ) {}

  handleSubmit() {
    this.checkEmail_login();
    this.checkPassword_login();

    if (this.emailMsg_login === '' && this.passwordMsg_login === '') {
      const storedData = this.localStorageService.getItem('userSignupData');

      if (storedData) {
        const userData = JSON.parse(storedData);

        if (userData.email === this.email_login) {
          if (userData.password === this.password_login) {
            alert('Login successful!');
            this.formMsg_login = '';
            this.route.navigate(['/app-dash-board']);
          } else {
            this.formMsg_login = 'Invalid password. Please try again.';
          }
        } else {
          this.formMsg_login = 'Email does not exist. Please sign up first.';
        }
      } else {
        this.formMsg_login = 'No user data found. Please sign up first.';
      }
    } else {
      this.formMsg_login = 'Some credentials are wrong. Please correct them.';
    }
  }

  checkEmail_login() {
    const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (this.email_login === '') {
      this.emailMsg_login = 'Email is required.';
    } else if (!patternEmail.test(this.email_login)) {
      this.emailMsg_login = 'Invalid email address.';
    } else {
      this.emailMsg_login = '';
    }
  }

  checkPassword_login() {
    if (this.password_login === '') {
      this.passwordMsg_login = 'Password is required.';
    } else if (this.password_login.length < 4) {
      this.passwordMsg_login = 'Password must be at least 4 characters long.';
    } else {
      this.passwordMsg_login = '';
    }
  }
}
