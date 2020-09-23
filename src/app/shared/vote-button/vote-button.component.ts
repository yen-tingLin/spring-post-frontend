import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';
import { VoteService } from '../vote.service';
import { VotePayload } from './vote-payload';
import { VoteType } from './vote-type';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;
  votePayload: VotePayload;

  constructor(private voteService: VoteService,
              private authService: AuthService,
              private postService: PostService,
              private toastr: ToastrService)
  {
    this.votePayload = {
      postId: undefined,
      voteType: undefined,
      userName: ''
    }

  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvotePost() {
    this.votePayload.voteType = VoteType.LIKE;
    this.vote();
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DISLIKE;
    this.vote();
  }

  vote() {
    this.votePayload.postId = this.post.id;
    this.votePayload.userName = this.authService.getUserName();

    this.voteService.vote(this.votePayload).subscribe(
      () => {
        this.updateVoteDetails();
      }, error => {
        this.toastr.error("Please login or can not vote twice");
        throwError(error);
      }
    );
  }

  // update voteCount and wheather the post is upVoted or
  // downVoted by this user 
  updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe(
      data => {
        this.post = data;
      }, error => {
        throwError(error);
      }
    );
  }

}
