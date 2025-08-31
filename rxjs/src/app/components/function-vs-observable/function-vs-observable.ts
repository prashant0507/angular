import { Component } from '@angular/core';
import { functionObs, obs } from '../../services.ts/Function';

@Component({
  selector: 'app-function-vs-observable',
  imports: [],
  templateUrl: './function-vs-observable.html',
  styleUrl: './function-vs-observable.scss'
})
export class FunctionVsObservable {
  // FUNCTION RETURN SINGLE VALUE
  // OBSERVABLE RETURN MULTIPLE VALUE

  // both are lazy once you called and subscribe thn only executed

  constructor(){
    console.log('before function');
    console.log(functionObs());
    console.log(functionObs());
    console.log('after function');

    console.log('before Observable');
    obs.subscribe((data: any) => {
      console.log(data);
    });
    obs.subscribe((data: any) => {
      console.log(data);
    });
    console.log('after Observable');

  }
}
