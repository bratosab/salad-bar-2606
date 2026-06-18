import { Routes } from '@angular/router';
import { Order } from './order/order';

export const routes: Routes = [
  {
    path: '',
    component: Order
  },
  {
    path: 'kitchen',
    loadComponent: () => import('./kitchen/kitchen').then((c) => c.Kitchen),
  },
];