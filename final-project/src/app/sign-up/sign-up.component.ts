import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  nameMsg: string = '';
  emailMsg: string = '';
  passwordMsg: string = '';
  confirmPasswordMsg: string = '';
  formMsg: string = '';

  constructor(private localStorageService: LocalStorageService) {}

  handleSubmit() {
    this.checkName();
    this.checkEmail();
    this.checkPassword();
    this.checkPasswordMatch();

    if (
      this.nameMsg === '' &&
      this.emailMsg === '' &&
      this.passwordMsg === '' &&
      this.confirmPasswordMsg === ''
    ) {
      if (this.restrictDuplicateEmail(this.email)) {
        this.formMsg = 'Email is already registered. Use a different email.';
      } else {
        const userData = {
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };

        this.localStorageService.setItem('userSignupData', userData);
        alert('Signup successful! You can now log in.');
        this.formMsg = '';
      }
    } else {
      this.formMsg = 'Some credentials are invalid. Please correct them.';
    }
  }

  checkName() {
    if (this.name === '') {
      this.nameMsg = 'Name is required.';
    } else if (this.name.length < 4) {
      this.nameMsg = 'Name must be at least 4 characters long.';
    } else {
      this.nameMsg = '';
    }
  }

  checkEmail() {
    const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (this.email === '') {
      this.emailMsg = 'Email is required.';
    } else if (!patternEmail.test(this.email)) {
      this.emailMsg = 'Invalid email address.';
    } else {
      this.emailMsg = '';
    }
  }

  checkPassword() {
    if (this.password === '') {
      this.passwordMsg = 'Password is required.';
    } else if (this.password.length < 8) {
      this.passwordMsg = 'Password must be at least 8 characters long.';
    } else {
      this.passwordMsg = '';
    }
  }

  checkPasswordMatch() {
    if (this.password !== this.confirmPassword) {
      this.confirmPasswordMsg = 'Passwords do not match.';
    } else {
      this.confirmPasswordMsg = '';
    }
  }

  restrictDuplicateEmail(newEmail: string): boolean {
    const storedData = this.localStorageService.getItem('userSignupData');

    if (storedData) {
      const userData = JSON.parse(storedData);
      return userData.email === newEmail;
    }

    return false;
  }
}
