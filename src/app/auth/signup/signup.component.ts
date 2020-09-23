import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequestPayload } from './signup-request-payload';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupRequestPayload: SignupRequestPayload;
  
  constructor(private authService: AuthService,
            private router: Router,
            private toastr: ToastrService) 
  {
    this.signupRequestPayload = {
      userName: '',
      password: '',
      email: ''
    }
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  signup() {
    this.signupRequestPayload.userName = this.signupForm.get('username').value;
    this.signupRequestPayload.password = this.signupForm.get('password').value;
    this.signupRequestPayload.email = this.signupForm.get('email').value;

    this.authService.signup(this.signupRequestPayload)
        .subscribe(() => {
          this.router.navigate(['/login'], 
            { queryParams: { registered: 'true'} });
        }, () => {
          this.toastr.error('Registeration failed, please try again');
        });
  }

}
