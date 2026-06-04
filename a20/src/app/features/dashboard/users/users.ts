import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../models/user.interface';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserActions } from '../../../store/actions/user.actions';
import { Observable } from 'rxjs';
import { selectUserById, selectUsers } from '../../../store/selectors/user.selectors';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit{
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  
  usersList = signal<User[] | []>([]);
  
  userListWithStore$?: Observable<User[]>;
  userListWithStoreFilterById$?: Observable<User[]>;

  // Pass Selector in Signal
  usersListBySelectorUsingSignal = toSignal(this.store.select(selectUsers), {initialValue: [] as User[]})

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());

    // Getting data by Resolver
    const resolveData = this.route.snapshot.data['userData'];
    this.usersList.set(resolveData);

    // Getting data by Store - fetch All users
    this.userListWithStore$ = this.store.select(selectUsers);

    // Getting data by Store - fetch specific users
    this.userListWithStoreFilterById$ = this.store.select(selectUserById(1));
  }
}
