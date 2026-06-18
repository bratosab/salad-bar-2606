import { Component, input, output } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.html',
  styleUrl: './toppings.scss',
  imports: [MatButton],
})
export class Toppings {
  public toppings = input<Topping[]>([]);
  public buttonLabel = input<string>('');
  public compact = input<boolean>(false);
  public chooseTopping = output<Topping>();
}
