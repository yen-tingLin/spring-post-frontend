import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupRequestPayload } from '../signup/signup-request-payload';
import { LoginRequestPayload } from '../login/login-request-payload';
import { LoginResponsePayload } from '../login/login-response-payload';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() userName: EventEmitter<string> = new EventEmitter();

  refreshTokenPayload = {
    refreshToken: '',
    userName: ''
  }

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

        // update refreshTokenPayload
        this.refreshTokenPayload.refreshToken = this.getRefreshToken();
        this.refreshTokenPayload.userName = this.getUserName();

        this.loggedIn.emit(true);
        this.userName.emit(data.userName);
        return true;
      }))
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  refreshToken() {
    return this.httpClient.post<LoginResponsePayload>('http://localhost:8080/api/auth/refresh/token',
      this.refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('expiresAt');

        this.localStorage.store('authenticationToken',
          response.authenticationToken);
        this.localStorage.store('expiresAt', response.expiresAt);
      }));
  }

  logout() {
    console.log("now localStorage refreshToken : " + this.getRefreshToken());
    console.log(("now localStorage userName : " + this.getUserName()));

    console.log("now refreshTokenPayload.refreshToken : " + this.refreshTokenPayload.refreshToken);
    console.log("now refreshTokenPayload.userName : " + this.refreshTokenPayload.userName);

    this.httpClient.post('http://localhost:8092/api/auth/logout', this.refreshTokenPayload,
    { responseType: 'text' }).subscribe(
      data =>{
        console.log(data);
      }, error => {
        throwError(error);
      });
    
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('userName');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
  }

  getUserName() {
    return this.localStorage.retrieve('userName');
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

}
