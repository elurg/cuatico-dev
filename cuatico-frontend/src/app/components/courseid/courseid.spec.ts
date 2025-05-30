import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courseid } from './courseid';

describe('Courseid', () => {
  let component: Courseid;
  let fixture: ComponentFixture<Courseid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courseid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Courseid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
