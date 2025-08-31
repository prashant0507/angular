import { Component, OnInit } from '@angular/core';
import {Subscription, Observable} from 'rxjs';

@Component({
  selector: 'app-memory-leak',
  imports: [],
  templateUrl: './memory-leak.html',
  styleUrl: './memory-leak.scss'
})
export class MemoryLeak implements OnInit { 
  obs$ = new Observable((observer: any) => {
    let i = 0;
    let interval = setInterval(() => {
      console.log("interval executing");
      observer.next(i++);
    }, 1000);

    // This method will call when unsubscribe happen and error occured (observer.error('error'))
    return () => {
      console.log('called when observable is unsubscribed');
      clearInterval(interval);
    }

  })
  timerSubscription!: Subscription;
  timerSubscription2!: Subscription;

  ngOnInit(): void {
    this.timerSubscription = this.obs$.subscribe((data: any) => {
      console.log(data);
    });

    // this.timerSubscription2 = this.obs$.subscribe((data: any) => {
    //   console.log(data);
    // });
    // this.timerSubscription.add(this.timerSubscription2);
  }

  cancelObs(){
    console.log("cancel the subscription");
    this.timerSubscription.unsubscribe();
  }
}
