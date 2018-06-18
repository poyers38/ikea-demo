// ./app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { Highlight2Directive } from './highlight2.directive';

@NgModule({
    declarations: [
        HighlightDirective, Highlight2Directive
    ],
    exports: [
        HighlightDirective, Highlight2Directive
    ]
})
export class SharedModule{}