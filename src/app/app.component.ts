import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';


@Component({
  selector: 'twn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twn-test-project';
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(
      (event: Event) => this.parseRouterEvent(event));
  }

  private parseRouterEvent = (event: Event) => {
    switch (true) {
      case event instanceof NavigationStart: {
        this.loading = true;
        break;
      }

      case event instanceof NavigationEnd:
      case event instanceof NavigationCancel:
      case event instanceof NavigationError: {
        this.loading = false;
        break;
      }
      default: {
        break;
      }
    }
  }
}
