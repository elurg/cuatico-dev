import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourses } from './new-courses';

describe('NewCourses', () => {
  let component: NewCourses;
  let fixture: ComponentFixture<NewCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCourses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
