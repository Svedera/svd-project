import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { RemoteRouterState } from '@enums/remoteRouterState';

@Component({
  selector: 'svd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routerState: RemoteRouterState = RemoteRouterState.Unknown;

  constructor(private router: Router) {
    this.router.events.subscribe(
      (event: Event) => this.getRouterState(event));
  }

  private getRouterState = (event: Event): RemoteRouterState => {
    if (event instanceof NavigationStart) {
      this.routerState = RemoteRouterState.Start;
    }
    if (event instanceof NavigationEnd) {
      this.routerState = RemoteRouterState.End;
    }
    if (event instanceof NavigationCancel) {
      this.routerState = RemoteRouterState.Cancel;
    }
    if (event instanceof NavigationError) {
      this.routerState = RemoteRouterState.Error;
    }

    return RemoteRouterState.Unknown;
  }
}
