import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'twn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<void>();
}
