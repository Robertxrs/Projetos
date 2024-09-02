import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrincingComponent } from './card-princing.component';

describe('CardPrincingComponent', () => {
  let component: CardPrincingComponent;
  let fixture: ComponentFixture<CardPrincingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPrincingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPrincingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
