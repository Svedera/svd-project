import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

import { fromEvent, mergeMap, takeUntil } from 'rxjs';

import { SceneEvent, SceneInteractionMode } from '@enums/scene';
import { DrawingHandler } from '@services/abstract/drawingHandler';
import { Point } from '@models/drawings/elements';
import { DrawingService } from '@services/drawing/drawing.service';

@Component({
  selector: 'svd-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

  @ViewChild('canvasContainer', { static: true }) canvasContainer:
    ElementRef<HTMLCanvasElement> | null = null;

  get canvas(): HTMLCanvasElement {
    if (this.canvasContainer == null) {
      throw new Error('Canvas container is undefined.')
    }

    return this.canvasContainer.nativeElement;
  }

  private multiselectMode = false;
  private interactionMode = SceneInteractionMode.AllActions;

  private painter: DrawingHandler;


  constructor() {
    this.painter = new DrawingService();
  }

  ngOnInit(): void {
    const move$ = fromEvent<MouseEvent>(this.canvas, SceneEvent.PointerMove);
    const down$ = fromEvent<MouseEvent>(this.canvas, SceneEvent.PointerDown);
    const up$ = fromEvent<MouseEvent>(this.canvas, SceneEvent.PointerUp);
    const paints$ = down$.pipe(
      mergeMap(_ => move$.pipe(takeUntil(up$)))
    );

    paints$.subscribe((event) => {
      const point: Point = {
        x: event.offsetX,
        y: event.offsetY
      };
      this.painter.paint(point)
    });

    this.painter.initializeCanvas(this.canvas);
  }
}
