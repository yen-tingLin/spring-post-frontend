import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostByUserComponent } from './list-post-by-user.component';

describe('ListPostByUserComponent', () => {
  let component: ListPostByUserComponent;
  let fixture: ComponentFixture<ListPostByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
