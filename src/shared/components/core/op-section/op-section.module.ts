import { NgModule } from '@angular/core';
import { OpSectionComponent } from './op-section.component';

const components = [
  OpSectionComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class OpSectionModule {}
