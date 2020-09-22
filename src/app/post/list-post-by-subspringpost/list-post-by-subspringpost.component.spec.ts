import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostBySubspringpostComponent } from './list-post-by-subspringpost.component';

describe('ListPostBySubspringpostComponent', () => {
  let component: ListPostBySubspringpostComponent;
  let fixture: ComponentFixture<ListPostBySubspringpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostBySubspringpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostBySubspringpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
