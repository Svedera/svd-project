import { Component, Input } from '@angular/core';

@Component({
  selector: 'svd-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {
  @Input() title: string = '';
}
