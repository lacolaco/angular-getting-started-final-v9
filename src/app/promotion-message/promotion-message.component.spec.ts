import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionMessageComponent } from './promotion-message.component';

describe('PromotionMessageComponent', () => {
  let component: PromotionMessageComponent;
  let fixture: ComponentFixture<PromotionMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
