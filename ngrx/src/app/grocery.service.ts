import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http:HttpClient) {}

  fetchAllGroceries(){
    // return this.http.get("http://localhost:5000/groceries")
    return of(
      [
        { "id": 1, "name": "Milk", "type": "fruit" },
        { "id": 2, "name": "Banana", "type": "fruit" },
        { "id": 3, "name": "lays chips", "type": "snacks" },
        { "id": 4, "name": "doritos", "type": "snacks" }
      ]
    )
  }
}
