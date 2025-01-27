import { Component, Input } from '@angular/core';

import { Image } from 'src/app/core/backend-models/image';

@Component({
  selector: 'svd-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() image: Image | null = null;
}
