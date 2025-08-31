import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { Grocery } from '../models/grocery.model';
import {Store} from '@ngrx/store';
import { groceryAction } from './store/actions/grocery.action';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BucketComponent, GroceryComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('ngrx');
  constructor(private store: Store<{grocery: Grocery[]}>){}
  ngOnInit(): void {
    this.store.dispatch(groceryAction.loadGrocery())
  }
}
