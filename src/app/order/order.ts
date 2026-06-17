import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Order as OrderService } from '../services/order'
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  private formBuilder = inject(FormBuilder)
  private orderService = inject(OrderService)
  private router = inject(Router)


  protected orderForm = this.formBuilder.group({
    name: ['', Validators.required],
    tel: ['0612345678', [Validators.required, Validators.pattern('0[6-7][0-9]{8}')]],
  })

  protected startOrder() {
    if(this.orderForm.valid) {
      this.orderService.name = this.orderForm.controls.name.value ?? ''
      this.orderService.tel = this.orderForm.controls.tel.value ?? ''

      this.router.navigate(['salad'])
    }
  }
}
