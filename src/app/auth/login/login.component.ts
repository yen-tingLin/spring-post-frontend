import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequestPayload } from './login-request-payload';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  hasError: boolean;
  registerSuccessMessage: string;

  constructor(private authService: AuthService,
            private router: Router,
            private activatedRoute: ActivatedRoute,
            private toastr: ToastrService) 
  {
    this.loginRequestPayload = {
      userName: '',
      password:''
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.activatedRoute.queryParams
      .subscribe(params => {
        if(params.registered !== undefined && params.registered === 'true') {
          this.toastr.success('Signup successful');
          this.registerSuccessMessage = 'Please check your email ' + 
                      'and activate your account before you login';
        }
      });
  }

  login() {
    this.loginRequestPayload.userName = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;
  
    this.authService.login(this.loginRequestPayload).subscribe( data => {
      this.hasError = false;
      this.router.navigateByUrl('');
      this.toastr.success('Login Successful');
    }, error => {
      this.hasError = true;
      throwError(error);
    });
  }

}
