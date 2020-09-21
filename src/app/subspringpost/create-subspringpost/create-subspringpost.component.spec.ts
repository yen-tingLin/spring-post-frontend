import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubspringpostComponent } from './create-subspringpost.component';

describe('CreateSubspringpostComponent', () => {
  let component: CreateSubspringpostComponent;
  let fixture: ComponentFixture<CreateSubspringpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubspringpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubspringpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
