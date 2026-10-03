import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { createCustomElement } from '@angular/elements';
import { UserCard } from './app/user-card/user-card';

// Default Code
// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));


// Custom Code
(async () => {
  const app = await createApplication(appConfig);

  // Convert `UserCard` to a custom element.
  const userCardElement = createCustomElement(UserCard, {
    injector: app.injector,
  });

  // Register the custom element with the browser.
  customElements.define('user-card', userCardElement);
})();
