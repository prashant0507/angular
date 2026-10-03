import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  encapsulation: ViewEncapsulation.ShadowDom, // keeps its CSS isolated from the host app
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  @Input() name = 'Guest';
  @Input() city = '';
  @Output() selected = new EventEmitter<string>();
  onSelect() {
    this.selected.emit(this.name);
  }
}
