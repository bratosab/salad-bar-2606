import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { Order as OrderService } from '../../services/order';
import { ToppingsService } from '../../services/toppings-service';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-salad',
  standalone: false,
  templateUrl: './salad.html',
  styleUrl: './salad.scss',
})
export class Salad implements OnInit {
  protected orderService = inject(OrderService);
  protected toppingsService = inject(ToppingsService);

  protected toppings = signal<Topping[]>([])

  ngOnInit() {
    this.toppingsService.getToppings().subscribe((toppings) => {
      console.log('in subscribe');
      this.toppings.set(toppings);
    });
    console.log('after subscribe');

  
  }
}
