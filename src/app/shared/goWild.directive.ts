import { Directive, Renderer, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: 'appgowild'
})
export class GoWildDirective{
  constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
	
}