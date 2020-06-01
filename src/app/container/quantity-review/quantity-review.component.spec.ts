import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityReviewComponent } from './quantity-review.component';

describe('QuantityReviewComponent', () => {
  let component: QuantityReviewComponent;
  let fixture: ComponentFixture<QuantityReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
