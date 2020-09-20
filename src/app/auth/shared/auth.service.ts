import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupRequestPayload } from '../signup/signup-request-payload';
import { LoginRequestPayload } from '../login/login-request-payload';
import { LoginResponsePayload } from '../login/login-response-payload';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
            private localStorage: LocalStorageService) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post(
      'http://localhost:8092/api/auth/register', signupRequestPayload,
      { responseType: 'text' });
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponsePayload> (
      'http://localhost:8092/api/auth/login', loginRequestPayload)
      .pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('expiresAt', data.expiresAt);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('userName', data.userName);

        return true;
      }))
  }

}