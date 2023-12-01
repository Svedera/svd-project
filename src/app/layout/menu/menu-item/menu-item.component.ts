import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AppRouts } from '@enums/appRouts';
import { Icon } from '@enums/icons';

@Component({
  selector: 'svd-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() appRoutes: AppRouts | null = null;
  @Input() icon: Icon | null = null;
  @Input() title: string | null = null;
  @Output() itemClicked = new EventEmitter<void>();
}
