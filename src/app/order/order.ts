import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Order as OrderService } from '../services/order';
import { Router } from '@angular/router';
import { MatFormField, MatLabel, MatError, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { SetName, SetTel } from '../store/app.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.html',
  styleUrl: './order.scss',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError, MatButton, MatIcon, MatPrefix],
})
export class Order {
  private formBuilder = inject(FormBuilder);
  private orderService = inject(OrderService);
  private router = inject(Router);
  private store = inject(Store)

  protected orderForm = this.formBuilder.group({
    name: ['', Validators.required],
    tel: ['0612345678', [Validators.required, Validators.pattern('0[6-7][0-9]{8}')]],
  });

  protected startOrder() {
    if (this.orderForm.valid) {
      // this.orderService.name.set();
      // this.orderService.tel.set(this.orderForm.controls.tel.value ?? '');

      this.store.dispatch(SetName({name : this.orderForm.controls.name.value ?? ''}))
      this.store.dispatch(SetTel({tel : this.orderForm.controls.tel.value ?? ''}))

      this.router.navigate(['salad']);
    }
  }
}
