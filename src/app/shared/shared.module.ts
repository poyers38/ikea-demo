// ./app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { GoWildDirective } from './goWild.directive';
import { ShowMenuDirective } from './showMenu.directive';
import { HighlightDirective } from './highlight.directive';
import { Highlight2Directive } from './highlight2.directive';

@NgModule({
    declarations: [
        HighlightDirective, Highlight2Directive, GoWildDirective, ShowMenuDirective
    ],
    exports: [
        HighlightDirective, Highlight2Directive, GoWildDirective, ShowMenuDirective
    ]
})
export class SharedModule{}