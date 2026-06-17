import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  private formBuilder = inject(FormBuilder)

  protected orderForm = this.formBuilder.group({
    name: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('0[6-7][0-9]{8}')]],
  })

  protected startOrder() {
    console.log('unimplemented')
  }
}
