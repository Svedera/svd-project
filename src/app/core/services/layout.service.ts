import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private menuVisibleStream = new BehaviorSubject(false);

  public get menuVisible() {
    return this.menuVisibleStream.asObservable();
  }

  menuToggled = () =>
    this.menuVisibleStream.next(!this.menuVisibleStream.value);

  closeMenu = () =>
    this.menuVisibleStream.next(false);
}
