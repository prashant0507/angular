import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, filter, map, Observable, throwError } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersAPI {
  private http = inject(HttpClient);
  private apiUrl = '/api/users.json';

  all(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError((error) => throwError(() => error))
    );
  }

  // byId(id: number): Observable<User> {
  //   return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
  //     catchError((error) => throwError(() => error))
  //   );
  // }

  byId(id: number): Observable<User> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users: User[]) => {
        const found = users.find((user: User) => user.id === id);
        if (!found) throw new Error(`User with id ${id} not found`);
        return found;
      }),
      catchError((error) => throwError(() => error))
    );
  }
}
