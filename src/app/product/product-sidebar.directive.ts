import { Directive, Renderer2, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appProductSidebar]'
})
export class ProductSidebarDirective implements OnInit {
	
	@Input() prodCatLinkProps: { prodCategory: string; activeProdCategoryRoute: string };
	constructor(private renderer: Renderer2, private el: ElementRef) {
	
    }

	addClass() {
		//console.log('1: ' + this.prodCatLinkProps[0].prodCategory);
		//console.log('2: ' + this.prodCatLinkProps[0].activeProdCategoryRoute);
		this.renderer.removeClass(this.el.nativeElement, 'active');
		if (this.prodCatLinkProps[0].prodCategory === this.prodCatLinkProps[0].activeProdCategoryRoute)
			this.renderer.addClass(this.el.nativeElement, 'active');		
			
		
	}
	
	ngOnInit() {
        this.addClass();
    }
	
	ngOnChanges() {
        this.addClass();
    }
	
}
