import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { Order as OrderService } from '../../services/order';
import { ToppingsService } from '../../services/toppings-service';
import { Topping } from '../../models/topping.model';
import { Toppings } from '../toppings/toppings';
import { Store } from '@ngrx/store';
import { ChooseTopping, GetToppings, RemoveTopping } from '../store/salad.actions';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.html',
  styleUrl: './salad.scss',
  imports: [Toppings],
})
export class Salad implements OnInit {
  protected orderService = inject(OrderService);
  protected toppingsService = inject(ToppingsService);
  
  private store = inject(Store);
  protected name = this.store.selectSignal(state => state.app.name)
  protected chosenToppings = this.store.selectSignal(state => state.salad.chosenToppings)

  protected toppings = this.store.selectSignal(state => state.salad.toppings)

  ngOnInit() {
    this.store.dispatch(GetToppings())
  }

  protected ChooseTopping(topping: Topping) {
    this.store.dispatch(ChooseTopping({ choice : topping}))
  }

  protected RemoveTopping(topping: Topping) {
    this.store.dispatch(RemoveTopping({ choice : topping}))
  }
}
