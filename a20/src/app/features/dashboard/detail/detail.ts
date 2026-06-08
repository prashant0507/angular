import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserActions } from '../../../store/actions/user.actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectUserById } from '../../../store/selectors/user.selectors';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail implements OnInit{
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  userId!: number;

  usersListBySelectorUsingSignal = toSignal(this.store.select(selectUserById));

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(UserActions.loadDetalUsers({ id: this.userId }));
  }
}
