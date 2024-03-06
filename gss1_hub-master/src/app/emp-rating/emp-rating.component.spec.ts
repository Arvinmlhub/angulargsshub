import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRatingComponent } from './emp-rating.component';

describe('EmpRatingComponent', () => {
  let component: EmpRatingComponent;
  let fixture: ComponentFixture<EmpRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
