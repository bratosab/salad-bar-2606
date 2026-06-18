import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing-module';
import { Salad } from './salad/salad';
import { Toppings } from './toppings/toppings';
import { MatAnchor } from "@angular/material/button";

@NgModule({
  declarations: [Salad, Toppings],
  imports: [CommonModule, SaladRoutingModule, MatAnchor],
})
export class SaladModule {}
