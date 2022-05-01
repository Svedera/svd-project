import { Component, Input } from '@angular/core';
import { RemoteRouterState } from '@enums/remoteRouterState';

@Component({
  selector: 'twn-remote-state-wrapper',
  templateUrl: './remote-state-wrapper.component.html',
  styleUrls: ['./remote-state-wrapper.component.css']
})
export class RemoteStateWrapperComponent {
  RemoteRouterState = RemoteRouterState;

  @Input() state = RemoteRouterState.Unknown;
}
