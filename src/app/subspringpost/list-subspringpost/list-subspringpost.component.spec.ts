import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubspringpostComponent } from './list-subspringpost.component';

describe('ListSubspringpostComponent', () => {
  let component: ListSubspringpostComponent;
  let fixture: ComponentFixture<ListSubspringpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubspringpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubspringpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
