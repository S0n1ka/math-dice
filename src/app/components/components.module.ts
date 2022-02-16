import { NgModule } from '@angular/core';
import { SixSidedComponent } from './six-sided/six-sided.component';
import { TwelveSidedComponent } from './twelve-sided/twelve-sided.component';

@NgModule({
   imports: [],
   exports: [SixSidedComponent, TwelveSidedComponent],
   declarations: [SixSidedComponent, TwelveSidedComponent],
   providers: [],
})

export class ComponentsModule {}
