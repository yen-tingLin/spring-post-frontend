import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { SubspringpostSidebarComponent } from './shared/subspringpost-sidebar/subspringpost-sidebar.component';
import { CreateSubspringpostComponent } from './subspringpost/create-subspringpost/create-subspringpost.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ListSubspringpostComponent } from './subspringpost/list-subspringpost/list-subspringpost.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CommentComponent } from './comment/comment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListPostByUserComponent } from './post/list-post-by-user/list-post-by-user.component';
import { ListPostBySubspringpostComponent } from './post/list-post-by-subspringpost/list-post-by-subspringpost.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostTileComponent,
    VoteButtonComponent,
    SideBarComponent,
    SubspringpostSidebarComponent,
    CreateSubspringpostComponent,
    CreatePostComponent,
    ListSubspringpostComponent,
    ViewPostComponent,
    CommentComponent,
    ListPostByUserComponent,
    ListPostBySubspringpostComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
