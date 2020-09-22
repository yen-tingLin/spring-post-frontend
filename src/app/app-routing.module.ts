import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CreateSubspringpostComponent } from './subspringpost/create-subspringpost/create-subspringpost.component';
import { ListSubspringpostComponent } from './subspringpost/list-subspringpost/list-subspringpost.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { ListPostByUserComponent } from './post/list-post-by-user/list-post-by-user.component';
import { ListPostBySubspringpostComponent } from './post/list-post-by-subspringpost/list-post-by-subspringpost.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-post-by-subspringpost/:subspringpostName/:subspringpostId', component: ListPostBySubspringpostComponent},
  { path: 'list-posts-by-user/:username', component: ListPostByUserComponent},
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'list-categories', component: ListSubspringpostComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'create-category', component: CreateSubspringpostComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
