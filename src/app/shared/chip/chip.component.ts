import { Component, Input } from '@angular/core';

@Component({
  selector: 'twn-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {
  @Input() title: string = '';
}
