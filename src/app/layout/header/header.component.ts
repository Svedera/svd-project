import { Component, EventEmitter, Output } from '@angular/core';
import { Icon } from '@enums/icons';

@Component({
  selector: 'svd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Icon = Icon;

  @Output() menuToggled = new EventEmitter<void>();
}
