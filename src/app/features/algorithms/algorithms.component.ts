import { Component } from '@angular/core';

import { AlgorithmsAccordion } from './algorithms-accordion';

@Component({
  selector: 'svd-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent {
  algorithmsAccordion = AlgorithmsAccordion();
  
  updateAccordionState(itemIndex: number, optionIndex: number) {

  }
}
