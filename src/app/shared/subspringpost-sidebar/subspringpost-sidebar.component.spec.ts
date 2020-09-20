import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubspringpostSidebarComponent } from './subspringpost-sidebar.component';

describe('SubspringpostSidebarComponent', () => {
  let component: SubspringpostSidebarComponent;
  let fixture: ComponentFixture<SubspringpostSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubspringpostSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubspringpostSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
