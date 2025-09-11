import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirective } from './components/structural-directive/structural-directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-v20');
}
