import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { PostModel } from 'src/app/shared/post-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-list-post-by-subspringpost',
  templateUrl: './list-post-by-subspringpost.component.html',
  styleUrls: ['./list-post-by-subspringpost.component.css']
})
export class ListPostBySubspringpostComponent implements OnInit {

  posts: Array<PostModel>;
  categoryId: number;
  categorytName: string;

  constructor(private postService: PostService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params.subspringpostId;
    this.categorytName = this.activateRoute.snapshot.params.subspringpostName;

    this.postService.getAllPostsByCategory(this.categoryId).subscribe(
      data => {
        this.posts = data;
      }, error => {
        throwError(error);
      }
    );
  }

}
