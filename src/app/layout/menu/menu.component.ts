import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AppRouts } from '@enums/appRouts';
import { LayoutService } from '@services/layout.service';
import { Icon } from '@enums/icons';

@UntilDestroy()
@Component({
  selector: 'svd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  Icon = Icon;
  AppRouts = AppRouts;

  @Input() visibilityStream: Observable<boolean> | null = null;

  @HostBinding('class.menu-visible') mediaMenuVisible: boolean = false;

  constructor(public layout: LayoutService) { }

  ngOnInit(): void {
    this.visibilityStream?.pipe(untilDestroyed(this))
      .subscribe(value =>
        this.mediaMenuVisible = value);
  }
}
