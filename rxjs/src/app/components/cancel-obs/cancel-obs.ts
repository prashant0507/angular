import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-cancel-obs',
  imports: [],
  templateUrl: './cancel-obs.html',
  styleUrl: './cancel-obs.scss'
})
export class CancelObs implements OnInit{
  obs$ = interval(1000);
  timerSubscription!: Subscription

  ngOnInit(): void {
    this.timerSubscription = this.obs$.subscribe((data: any) => {
      console.log(data);
    })
  }

  cancelObs(){
    console.log("cancel the subscription");
    this.timerSubscription.unsubscribe();
  }
   
}
