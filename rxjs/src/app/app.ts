import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrayPromiseEventToObservable } from './components/array-promise-event-to-observable/array-promise-event-to-observable';
import { NewObservable } from './components/new-observable/new-observable';
import { FunctionVsObservable } from './components/function-vs-observable/function-vs-observable';
import { CancelObs } from './components/cancel-obs/cancel-obs';
import { MemoryLeak } from './components/memory-leak/memory-leak';

@Component({
  selector: 'app-root',
  imports: [
      RouterOutlet, 
      ArrayPromiseEventToObservable, 
      NewObservable, 
      FunctionVsObservable, 
      CancelObs,
      MemoryLeak
    ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'rxjs';
}
