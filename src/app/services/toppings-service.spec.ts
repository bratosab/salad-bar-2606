import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { ToppingsService } from './toppings-service';
import { Topping } from '../models/topping.model';
import { firstValueFrom } from 'rxjs';

describe('Toppings Service', () => {
  let service: ToppingsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(ToppingsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return toppings list when calling getToppings()',  async () => {
    const mockToppings: Topping[] = [
      { id: 1, name: 'Le meilleure fromage de monde, le bleu du Vercors', price: 1000000 },
    ];
    
    const getToppingsPromise = firstValueFrom(service.getToppings());

    const req = httpTestingController.expectOne('https://retoolapi.dev/XDaOzA/toppings');
    expect(req.request.method).toBe("GET")
    req.flush(mockToppings);

    expect(await getToppingsPromise).toEqual(mockToppings);
  });
});
