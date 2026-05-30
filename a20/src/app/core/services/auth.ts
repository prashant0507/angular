import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  // Instead of localStorage now we will use signal to set token
  // It will loose the state on page load 
  private readonly token = signal<string | null>(null);
  
  router = inject(Router)
  private http = inject(HttpClient);
  private apiUrl = 'https://fake-json-api.mock.beeceptor.com/users';

  login(username: string, password: string): Observable<boolean> {
    return this.http.get(this.apiUrl).pipe(
      map(() => {
        if(username == 'admin@gmail.com' && password == 'admin') {
          this.token.set('mock-token');
          return true;
        }
        return true;
      }),
      catchError((error) => {
        return of(false);
      })
    );
  }

  // const name = "Alice";
  // console.log(!name);  // false (inverts the "truthy" string)
  // console.log(!!name); // true  (inverts it back to a boolean)
  get isAuthenticated(): boolean {
    return !!this.token();
  }

  logout(){
    this.token.set(null);
    this.router.navigate(['./']);
  }

  getToken(): string | null {
    return this.token()
  }
}
