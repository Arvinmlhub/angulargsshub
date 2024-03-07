import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfpPaidDetailComponent } from './pfp-paid-detail.component';

describe('PfpPaidDetailComponent', () => {
  let component: PfpPaidDetailComponent;
  let fixture: ComponentFixture<PfpPaidDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfpPaidDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfpPaidDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
