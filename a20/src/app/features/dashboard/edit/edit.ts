import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserById } from '../../../store/selectors/user.selectors';
import { UserActions } from '../../../store/actions/user.actions';

@Component({
  selector: 'app-edit',
  imports: [],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
})
export class Edit implements OnInit {
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  userId!: number;
  userDetailBySelectorUsingSignal = toSignal(this.store.select(selectUserById))
  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(UserActions.loadDetalUsers({id: this.userId}));
  }

}
