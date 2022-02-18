import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SixSidedComponent } from './six-sided/six-sided.component';
import { TwelveSidedComponent } from './twelve-sided/twelve-sided.component';

@NgModule({
   imports: [CommonModule],
   exports: [SixSidedComponent, TwelveSidedComponent],
   declarations: [SixSidedComponent, TwelveSidedComponent],
   providers: [],
})

export class ComponentsModule {}
