import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import {Store} from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/actions/bucket.action';
import { selectGroceries, selectGroceryByType, selectGroceryByTypeDynamic } from '../../store/selectors/grocery.selector';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export class GroceryComponent implements OnInit {

  constructor(private store: Store<{grocery: Grocery[]}>){}

  groceries$?:Observable<Grocery[]>;
  groceriesFilter$?:Observable<Grocery[]>;

  ngOnInit(): void {
    // this.groceries$ = this.store.select("grocery");
    this.groceries$ = this.store.select(selectGroceries);
    //this.groceries$ = this.store.select(selectGroceryByType);
  }

  onTypeChange(event: Event){
    const selectType = (event.target as HTMLSelectElement).value;
    if(selectType) {
      this.groceriesFilter$ = this.store.select(selectGroceryByTypeDynamic(selectType));
    }else{
      this.groceriesFilter$ = undefined;
    }
  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }

    this.store.dispatch(addToBucket({payload}))
  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
    }

    this.store.dispatch(removeFromBucket({payload}))
  }

}
