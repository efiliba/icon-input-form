import { Directive, ContentChildren, QueryList, Input, AfterContentInit } from "@angular/core";
import {ShowOneTriggerDirective} from "./show-one-trigger.directive";
import {ShowOneDirective} from "./show-one.directive";

@Directive({selector: '[showOneContainer]'})
export class ShowOneContainerDirective implements AfterContentInit {
  triggers: ShowOneTriggerDirective[] = [];

  @Input() active: string;
  @ContentChildren(ShowOneDirective) items: QueryList<ShowOneDirective>;
  // @ContentChildren(ShowOneTriggerDirective) i: QueryList<ShowOneTriggerDirective>;

  ngAfterContentInit() {
    this.show(this.active);
  }

  add(trigger: ShowOneTriggerDirective) {
    this.triggers.push(trigger);
  }

  show(id: string) {
    this.items.forEach((item: ShowOneDirective) => item.active = item.id == id);

    this.triggers.forEach((trigger: ShowOneTriggerDirective) =>
      trigger.active = trigger.id == id
    );
  }
}