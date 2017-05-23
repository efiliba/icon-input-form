import { Directive, Input, HostListener, HostBinding } from '@angular/core';
import { ShowOneContainerDirective } from "./show-one-container.directive";

@Directive({selector: '[showOneTrigger]'})
export class ShowOneTriggerDirective {  
  active = false;
  @Input('showOneTrigger') id: string;

  constructor(private showOneContainer: ShowOneContainerDirective) {
    showOneContainer.add(this);
  }

  @HostListener('click') click() {
    this.showOneContainer.show(this.id);
  }

  @HostBinding('class.selected') get selected() {
    return this.active;
  }
}
