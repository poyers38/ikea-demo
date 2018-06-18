import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {
    constructor(private renderer: Renderer2, private el: ElementRef) {

    }

	@HostListener('mouseover') onMouseOver() {
		this.show(1);
	}

	@HostListener('mouseout') onMouseOut() {
		this.show(0);
	}
	
	show(val) {
		if (val == 1)
			this.renderer.addClass(this.el.nativeElement.querySelector('div'), 'show');
		else
			this.renderer.removeClass(this.el.nativeElement.querySelector('div'), 'show');
	}
}