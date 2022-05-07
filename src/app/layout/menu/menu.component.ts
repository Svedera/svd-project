import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'svd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() visibilityStream: Observable<boolean> | null = null;

  @HostBinding('class.menu-visible') mediaMenuVisible: boolean = false;

  ngOnInit(): void {
    this.visibilityStream?.pipe(untilDestroyed(this))
      .subscribe(value =>
        this.mediaMenuVisible = value);
  }
}
