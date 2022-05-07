import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'svd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<void>();
}
