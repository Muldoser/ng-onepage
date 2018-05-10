import { NgModule } from '@angular/core';
import { OpTitleComponent } from './op-title.component';

const components = [
  OpTitleComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class OpTitleModule {}
