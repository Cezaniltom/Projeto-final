import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFaSComponent } from './card-fa-s.component';

describe('CardFaSComponent', () => {
  let component: CardFaSComponent;
  let fixture: ComponentFixture<CardFaSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFaSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
