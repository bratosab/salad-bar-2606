import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';

export const saladGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router)

  const appState = store.selectSignal<AppState>(state => state.app)

  if (appState().name && appState().tel) {
    return true;
  } else {
    router.navigate(['/'])
    return false;
  }
};
