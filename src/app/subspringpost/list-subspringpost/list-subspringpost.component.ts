import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { SubspringpostModel } from '../subspringpost-response';
import { SubspringpostService } from '../subspringpost.service';

@Component({
  selector: 'app-list-subspringpost',
  templateUrl: './list-subspringpost.component.html',
  styleUrls: ['./list-subspringpost.component.css']
})
export class ListSubspringpostComponent implements OnInit {

  subspringposts: Array<SubspringpostModel>;

  constructor(private subspringpostService: SubspringpostService) { }

  ngOnInit(): void {
    this.subspringpostService.getAllSubSpringpost().subscribe( data => {
      this.subspringposts = data;
    }, error => {
      throwError(error);
    });
  }

}
