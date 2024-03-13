import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { fromEvent, mergeMap, takeUntil } from 'rxjs';

import { SceneEvent } from '@enums/scene';
import { Point } from '@models/drawings/elements';
import { AlgorithmVisualizer } from '@services/abstract/algorithmVisualizer';
import {
  AlgorithmVisualizationService
} from '@services/drawing/algorithm-visualization.service';

@Component({
  selector: 'svd-sorting-animation',
  templateUrl: './sorting-animation.component.html',
  styleUrls: ['./sorting-animation.component.css']
})
export class SortingAnimationComponent implements OnInit {

  @ViewChild('canvasContainer', { static: true }) canvasContainer:
    ElementRef<HTMLCanvasElement> | null = null;

  get canvas(): HTMLCanvasElement {
    if (this.canvasContainer == null) {
      throw new Error('Canvas container is undefined.')
    }

    return this.canvasContainer.nativeElement;
  }

  private visualizer: AlgorithmVisualizer;

  constructor() {
    this.visualizer = new AlgorithmVisualizationService();
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
    });

    this.visualizer.initializeCanvas(this.canvas);
  }
}
