import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moduloid } from './moduloid';

describe('Moduloid', () => {
  let component: Moduloid;
  let fixture: ComponentFixture<Moduloid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moduloid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moduloid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
