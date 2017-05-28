import { Component, AfterContentInit, Input, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from "../common/input-ref.directive";

@Component({
  selector: 'icon-input',
  templateUrl: './icon-input.component.html',
  styleUrls: ['./icon-input.component.css']
})
export class IconInputComponent implements AfterContentInit {

  @Input() icon: string;
  @ContentChild(InputRefDirective) input: HTMLInputElement;

  ngAfterContentInit() {
    if (!this.input) {
      console.error('icon-input requires a nested input element');
    }
  }

  @HostBinding('class.input-focus') get isInputFocussed() {
    return this.input.focus;
  }
  
  get classes() {
    return {
      [`fa-${this.icon}`]: this.icon
    };
  }
}
