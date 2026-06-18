import { Service, signal } from '@angular/core';

@Service()
export class Order {
    public name = signal<string>('');
    public tel = signal<string>('');
}
