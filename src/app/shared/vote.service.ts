import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VotePayload } from './vote-button/vote-payload';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private httpClient: HttpClient) { }

  vote(votePayload: VotePayload): Observable<any> {
    return this.httpClient.post('http://localhost:8092/api/votes/vote', votePayload);
  }

}
