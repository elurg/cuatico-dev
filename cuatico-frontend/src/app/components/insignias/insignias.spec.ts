import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insignias } from './insignias';

describe('Insignias', () => {
  let component: Insignias;
  let fixture: ComponentFixture<Insignias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Insignias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Insignias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
