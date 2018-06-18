import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
 
@Directive({
  selector: '[appShowMenu]'
})
export class ShowMenuDirective {
  constructor( private renderer: Renderer2, private el: ElementRef) { }
 
   ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'show');
  }
}