import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal, effect } from '@angular/core';
import { Topping } from '../models/topping.model';

@Service()
export class ToppingsService {
  private http = inject(HttpClient);

  getToppings() {
    return this.http.get<Topping[]>('https://retoolapi.dev/XDaOzA/toppings');
  }

  private chosenToppingsList = signal<Topping[]>([]);

  get chosenToppings() {
    return this.chosenToppingsList.asReadonly();
  }

  public totalPrice = computed(() => {
    let total = 0;
    this.chosenToppingsList().forEach((t) => (total += t.price));
    return total;
  });


public effect1 =  effect(() => {
    console.log(`topping was upadated : ${this.chosenToppingsList().length}`)
  });

  chooseTopping(topping: Topping) {
    this.chosenToppingsList.update((currentToppings) => [...currentToppings, topping]);
  }

  removeTopping(id: number) {
    this.chosenToppingsList.update((currentToppings) =>
      [...currentToppings].filter((t) => t.id !== id),
    );
  }
}
