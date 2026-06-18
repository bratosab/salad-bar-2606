import { Component, Input, input, output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.html',
  styleUrl: './toppings.scss',
  imports: [MatButton],
})
export class Toppings {
  // @Input()
  // public toppings: Toppings[] = []
  public toppings = input<Topping[]>([]);
  public buttonLabel = input<string>('');
  public chooseTopping = output<Topping>();
}
