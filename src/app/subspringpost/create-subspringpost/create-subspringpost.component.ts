import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubspringpostModel } from '../subspringpost-response';
import { SubspringpostService } from '../subspringpost.service';

@Component({
  selector: 'app-create-subspringpost',
  templateUrl: './create-subspringpost.component.html',
  styleUrls: ['./create-subspringpost.component.css']
})
export class CreateSubspringpostComponent implements OnInit {
  createSubspringpostForm: FormGroup;
  subspringpostModel: SubspringpostModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router,
            private subspringpostService: SubspringpostService) 
  {
    this.createSubspringpostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.subspringpostModel = {
      subpostName:'',
      description:''
    };
  }

  ngOnInit(): void {
  }

  createSubspringpost() {
    this.subspringpostModel.subpostName = this.createSubspringpostForm.get('title').value;
    this.subspringpostModel.description = this.createSubspringpostForm.get('description').value;
    this.subspringpostService.createSubspringpost(this.subspringpostModel).subscribe(data => {
      this.router.navigateByUrl('/list-categories');
    }, error => {
      throwError(error);
    });
  }

  discard() {
    this.router.navigateByUrl('/');
  }

}
