import { Directive, Input, HostBinding } from '@angular/core';

@Directive({selector: '[showOne]'})
export class ShowOneDirective {
  active = false;
  @Input('showOne') id: string;

  @HostBinding('hidden') get hidden() {
    return !this.active;
  }
}