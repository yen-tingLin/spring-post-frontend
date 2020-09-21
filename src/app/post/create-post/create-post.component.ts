import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PostService } from 'src/app/shared/post.service';
import { SubspringpostModel } from 'src/app/subspringpost/subspringpost-response';
import { SubspringpostService } from 'src/app/subspringpost/subspringpost.service';
import { CreatePostPayload } from './create-post-payload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  subspringposts: Array<SubspringpostModel>;

  constructor(private router: Router, 
            private postService: PostService,
            private subspringpostService: SubspringpostService) 
  { 
    this.postPayload = {
      title: '',
      subpostName: '',
      description: '',
      url: ''
    }
  }


  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subspringpostName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.subspringpostService.getAllSubSpringpost().subscribe(
      data => {
        this.subspringposts = data;
      }
    ), error => {
      throwError(error);
    };
  }

  createPost() {
    this.postPayload.title = this.createPostForm.get('postName').value;
    this.postPayload.subpostName = this.createPostForm.get('subspringpostName').value;
    this.postPayload.description = this.createPostForm.get('description').value;
    this.postPayload.url = this.createPostForm.get('url').value;

    this.postService.createPost(this.postPayload).subscribe(
      data => {
        this.router.navigateByUrl('/');
      }, error => {
        throwError(error);
      });
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}
