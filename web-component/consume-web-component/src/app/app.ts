import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  name = 'Prashant';
  city = 'Bangalore';
  message = '';

  onSelected(e: Event) {
    console.log('eeeee', e);
    this.message = 'Selected: ' + (e as CustomEvent).detail;
  }

  protected readonly title = signal('consume-web-component');
}
