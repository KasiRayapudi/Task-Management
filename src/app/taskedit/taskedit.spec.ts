import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskedit } from './taskedit';

describe('Taskedit', () => {
  let component: Taskedit;
  let fixture: ComponentFixture<Taskedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taskedit],
    }).compileComponents();

    fixture = TestBed.createComponent(Taskedit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
