import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  isDevMode,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { saladRoutes } from './salad/salad.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducers';
import { saladReducer } from './salad/store/salad.reducer';
import { loadToppings } from './salad/store/salad.effects';

export const config: ApplicationConfig = {
  providers: [
    provideRouter([...routes, ...saladRoutes]),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideStore({ router: routerReducer, app: appReducer, salad: saladReducer }),
    provideEffects({ loadToppings }),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
