import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[inner-content]'
})

export class InnerContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
