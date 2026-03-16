import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskadd } from './taskadd';

describe('Taskadd', () => {
  let component: Taskadd;
  let fixture: ComponentFixture<Taskadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taskadd],
    }).compileComponents();

    fixture = TestBed.createComponent(Taskadd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
