import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { LimitedQueue } from '@shared/utilities/queue';
import { Logging } from './abstract/logging';

@Injectable({
  providedIn: 'root'
})
export class RoutingNavigatorService {

  private navigationCapacity = 5;
  private navigation: LimitedQueue<string>;

  constructor(
    private router: Router,
    private logger: Logging) {

    this.navigation = new LimitedQueue(this.navigationCapacity);

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.navigation.enqueue(event.url);
      };
    });
  }

  public async navigateToPrevious() {
    const previous = this.navigation.previous();

    if (!previous) {
      this.logger.info('No previous page to navigate to.')
      return;
    }

    await this.router.navigateByUrl(previous);
  }

  public async navigateToNext() {
    const next = this.navigation.next();
    if (!next) {
      this.logger.info('No next page to navigate to.')
      return;
    }
    await this.router.navigateByUrl(next);
  }

}
