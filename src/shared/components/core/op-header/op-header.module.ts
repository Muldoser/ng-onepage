import { NgModule } from '@angular/core';
import { OpHeaderComponent } from './op-header.component';

const components = [
  OpHeaderComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class OpHeaderModule {}
