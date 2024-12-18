import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSidarComponent } from './cart-sidebar.component';

describe('CartSidarComponent', () => {
  let component: CartSidarComponent;
  let fixture: ComponentFixture<CartSidarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSidarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartSidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
