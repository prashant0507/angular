import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../models/user.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit{
  private route = inject(ActivatedRoute);
  usersList = signal<User[] | []>([]);

  ngOnInit(): void {
    const resolveData = this.route.snapshot.data['userData'];
    this.usersList.set(resolveData);
  }
}
