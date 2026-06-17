import { Component, inject } from '@angular/core';
import { Order as OrderService } from '../../services/order'

@Component({
  selector: 'app-salad',
  standalone: false,
  templateUrl: './salad.html',
  styleUrl: './salad.scss',
})
export class Salad {
  protected orderService = inject(OrderService)

}
