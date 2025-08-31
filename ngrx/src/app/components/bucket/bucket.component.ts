import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../../models/bucket.model';
import { CommonModule } from '@angular/common';
import {Store} from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';


@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.scss'
})
export class BucketComponent implements OnInit{

   myBucket$?:Observable<Bucket[]>; 

   constructor(private store: Store<{bucket: Bucket[], grocery: Grocery[]}>){}

   ngOnInit(): void {
    this.myBucket$ = this.store.select("bucket");

    this.store.select("grocery").subscribe((data: any) => {
      console.log("Grocery data", data);
    })
  }

}
