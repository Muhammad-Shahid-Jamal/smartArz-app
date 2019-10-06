import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCompComponent } from './pagination-comp.component';

describe('PaginationCompComponent', () => {
  let component: PaginationCompComponent;
  let fixture: ComponentFixture<PaginationCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
