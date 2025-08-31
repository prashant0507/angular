import { Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { AfterViewInit } from '../../../../node_modules/@angular/core/index';

@Component({
  selector: 'app-array-promise-event-to-observable',
  imports: [],
  templateUrl: './array-promise-event-to-observable.html',
  styleUrl: './array-promise-event-to-observable.scss'
})
export class ArrayPromiseEventToObservable implements AfterViewInit {
  postArray = [
    {
      title:'Title1'
    },
    {
      title:'Title2'
    }
  ];
  postArrayObs$ = from(this.postArray);


  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve the Promise sending data');
    }, 3000)
  });
  promiseObs$ = from(this.promise);
  
  constructor(){
    this.postArrayObs$.subscribe({
      next: (data: any) => console.log(data),
      error: (error: any) => console.log(error), 
      complete: () => console.log("complete Array Converted in Observable"),
    });


    this.promiseObs$.subscribe({
      next: (data: any) => console.log(data),
      error: (error: any) => console.log(error), 
      complete: () => console.log("complete Promise Converted in Observable"),
    })
  }

  ngAfterViewInit(): void {
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
      next: (data: any) => console.log(data),
      error: (error: any) => console.log(error), 
      complete: () => console.log("complete Event Converted in Observable"),
    })
  }
}
