import { Component } from '@angular/core';
import { OnInit } from '../../../../node_modules/@angular/core/index';
import {Observable} from 'rxjs';
import { Observer4 } from '../../services.ts/Oberver4';

@Component({
  selector: 'app-new-observable',
  imports: [],
  templateUrl: './new-observable.html',
  styleUrl: './new-observable.scss'
})
export class NewObservable implements OnInit{
  constructor(){}
  ngOnInit(): void {
    console.log("======CUSTOM OBSERVABLE========");
    const newObs = new Observable<number>((observer: any) => {
      observer.next(1);
      observer.next(2);
      //observer.error('error'); // Below code will not execute and also complete
      observer.next(3);
      observer.complete('complete custom observable');
    });

    console.log("====WAY 1=========");
    let observer = {
      next: (data: number) => console.log('WAY 1', data),
      error: (error: string) => console.log('WAY 1', error),
      complete: () => console.log('WAY 1 => complete the custom observable'),
    }
    newObs.subscribe(observer);

    console.log("====WAY 2=========");
    newObs.subscribe({
      next: (data: number) => console.log('WAY 2', data),
      error: (error: string) => console.log('WAY 2', error),
      complete: () => console.log('WAY 2 => complete the custom observable'),
    });

    console.log("====WAY 3=========");
    newObs.subscribe(
      (data: number)=>console.log('WAY 3', data),
      (error: string) => (error: string) => console.log('WAY 3', error),
      () => console.log('WAY 3 => complete the ANother way'),
    );

    console.log("====WAY 4=========");
    newObs.subscribe(new Observer4());  
  }
}
