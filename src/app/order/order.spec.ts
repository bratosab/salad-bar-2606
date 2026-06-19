import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Order } from './order';
import { provideMockStore } from '@ngrx/store/testing';

describe('Order', () => {
  let component: Order;
  let fixture: ComponentFixture<Order>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Order],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(Order);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain two inputs in the order form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form.order-form')).toBeTruthy();
    expect(
      compiled.querySelectorAll('form.order-form > mat-form-field input[matinput]'),
    ).toHaveLength(2);
  });

  it('should not validate form when name is missing', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const submitBtn = compiled.querySelector<HTMLElement>(
      'form.order-form > button[type="submit"]',
    );
    expect(submitBtn).toBeTruthy()
    submitBtn?.click();

    fixture.autoDetectChanges()

    expect(compiled.querySelector('form.order-form > mat-form-field.mat-form-field-invalid')).toBeTruthy();

  });
});
