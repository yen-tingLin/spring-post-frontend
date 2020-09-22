import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-list-post-by-user',
  templateUrl: './list-post-by-user.component.html',
  styleUrls: ['./list-post-by-user.component.css']
})
export class ListPostByUserComponent implements OnInit {

  posts: Array<PostModel>;
  //author
  username: string;

  constructor(private postService: PostService,
              private activateRoute: ActivatedRoute) {  }

  ngOnInit(): void {

    this.username = this.activateRoute.snapshot.params.username;

    this.postService.getAllPostsByAuthor(this.username).subscribe(
      data => {
        this.posts = data;
      }, error => {
        throwError(error);
      }
    );

  }



}
