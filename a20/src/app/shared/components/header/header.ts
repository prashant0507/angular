import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{
  private auth = inject(Auth);

  // Computed signal - automatically updates when token changes
  isShowHeader = computed(() => !!this.auth.getToken());

  ngOnInit(): void {}

  logout():void {
    this.auth.logout();
  }
}
