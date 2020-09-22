import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timestamp } from 'rxjs/operators';
import { CreatePostPayload } from '../post/create-post/create-post-payload';
import { PostModel } from './post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.httpClient.get<Array<PostModel>>('http://localhost:8092/api/post/getAll');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8092/api/post/create', postPayload);
  }

  getPost(postId: number): Observable<PostModel> {
    return this.httpClient.get<PostModel>('http://localhost:8092/api/post/' + postId);
  }

  getAllPostsByAuthor(username: string): Observable<Array<PostModel>> {
    return this.httpClient.get<Array<PostModel>>('http://localhost:8092/api/post/by-user/' + username);
  }

  getAllPostsByCategory(subspringpostId: number): Observable<Array<PostModel>> {
    return this.httpClient.get<Array<PostModel>>('http://localhost:8092/api/post/by-subpost/' + subspringpostId);
  }
}
