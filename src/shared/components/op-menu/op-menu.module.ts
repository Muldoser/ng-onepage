import { NgModule } from '@angular/core';
import { OpMenuComponent } from './op-menu.component';

const components = [
  OpMenuComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class OpMenuModule {}
