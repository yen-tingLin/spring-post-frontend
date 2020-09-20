import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubspringpostModel } from './subspringpost-response';

@Injectable({
  providedIn: 'root'
})
export class SubspringpostService {

  constructor(private httpClient: HttpClient) { }

  getAllSubSpringpost(): Observable<Array<SubspringpostModel>> {
    return this.httpClient.get<Array<SubspringpostModel>>('http://localhost:8092/api/subpost/getAll');
  }
}
