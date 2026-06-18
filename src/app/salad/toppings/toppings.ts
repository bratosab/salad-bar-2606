import { Component, Input, input, output } from '@angular/core';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-toppings',
  standalone: false,
  templateUrl: './toppings.html',
  styleUrl: './toppings.scss',
})
export class Toppings {
  // @Input()
  // public toppings: Toppings[] = []
  public toppings = input<Topping[]>([])
  public buttonLabel = input<string>('')
  public chooseTopping = output<Topping>()
}
