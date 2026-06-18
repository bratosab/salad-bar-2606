import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { saladRoutes } from "./salad/salad.routes";

export const config: ApplicationConfig = {
  providers: [
    provideRouter([...routes, ...saladRoutes]),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
}