import { Component, Input } from '@angular/core';

import { Image } from '@models/image';

@Component({
  selector: 'twn-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() image: Image | null = null;

}
