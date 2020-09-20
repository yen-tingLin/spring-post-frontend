import { Component, OnInit } from '@angular/core';
import { SubspringpostModel } from 'src/app/subspringpost/subspringpost-response';
import { SubspringpostService } from 'src/app/subspringpost/subspringpost.service';

@Component({
  selector: 'app-subspringpost-sidebar',
  templateUrl: './subspringpost-sidebar.component.html',
  styleUrls: ['./subspringpost-sidebar.component.css']
})
export class SubspringpostSidebarComponent implements OnInit {

  subspringposts: Array<SubspringpostModel>;
  displayViewAll: boolean;

  constructor(private subspringpostService: SubspringpostService) {
    this.subspringpostService.getAllSubSpringpost().subscribe( 
      data => {
        if(data.length >= 4) {
          this.subspringposts = data.splice(0, 3);
          this.displayViewAll = true;
        } else {
          this.subspringposts = data;
        }       
      });
  }

  ngOnInit(): void {
  }

}
