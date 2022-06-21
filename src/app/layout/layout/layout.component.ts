import { Component } from '@angular/core';

import { LayoutService } from '@services/layout.service';

@Component({
  selector: 'svd-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  opened: boolean = true;

  constructor(public layout: LayoutService) {
  }

  menuToggled = () => this.layout.menuToggled();
}
