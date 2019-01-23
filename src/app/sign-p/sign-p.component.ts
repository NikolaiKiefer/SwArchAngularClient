import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {User} from '../models/User';
import {FormControl, FormGroup} from '@angular/forms';
import {SignUpInfo} from '../Authenticate/SignUpInfo';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-sign-p',
  templateUrl: './sign-p.component.html',
  styleUrls: ['./sign-p.component.scss']
})
export class SignPComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
