import { Component, EventEmitter, Input, Output } from '@angular/core';

export class UpdateAccordionState {
  itemIndex: number;
  optionIndex: number;

  constructor(itemIndex: number, optionIndex: number) {
    this.itemIndex = itemIndex;
    this.optionIndex = optionIndex;
  }
}

export class AccordionMenuItem {
  title: string;
  options: AccordionMenuOption[];

  constructor(title: string, options: AccordionMenuOption[]) {
    this.title = title;
    this.options = options;
  }
}

export class AccordionMenuOption {
  title: string;
  active: boolean;

  constructor(title: string, active: boolean) {
    this.title = title;
    this.active = active;
  }
}

@Component({
  selector: 'svd-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.css']
})
export class AccordionMenuComponent {
  accordionId: string;

  @Input() items: AccordionMenuItem[] | null = null;
  @Output() closeDialog = new EventEmitter<UpdateAccordionState>();

  constructor() {
    this.accordionId = `accordion-${crypto.randomUUID()}`;
  }

}
