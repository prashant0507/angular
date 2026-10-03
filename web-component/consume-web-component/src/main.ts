import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Custom code
function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load ' + src));
    document.head.appendChild(script);
  });
}

loadScript('web-component-user-card/browser/main.js')
.then(() => customElements.whenDefined('user-card'))
.then(() => bootstrapApplication(App, appConfig))
.catch((err) => console.error(err));

// Default code
// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));
