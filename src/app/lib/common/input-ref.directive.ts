import { Directive, HostListener } from '@angular/core';

@Directive({selector: 'icon-input input'})
export class InputRefDirective {
  focus = false;

  @HostListener('focus') onFocus() {
    this.focus = true;
  }

  @HostListener('focusout') onBlur() {
    this.focus = false;
  }
}