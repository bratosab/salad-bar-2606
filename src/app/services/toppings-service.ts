import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
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

  chooseTopping(topping: Topping) {
    this.chosenToppingsList.update((currentToppings) => [...currentToppings, topping]);
  }

  removeTopping(id: number) {
    this.chosenToppingsList.update((currentToppings) =>
      [...currentToppings].filter((t) => t.id !== id),
    );
  }
}
