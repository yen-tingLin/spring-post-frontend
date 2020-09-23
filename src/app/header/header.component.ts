import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  isLoggedIn: boolean;
  userName: string;

  constructor(private authService: AuthService,
              private router: Router) 
  { 

  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe(
      (data: boolean) => this.isLoggedIn = data);
    this.authService.userName.subscribe(
      (data: string) => this.userName = data);

    this.isLoggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getUserName();

  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile/' + this.userName);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }

}
