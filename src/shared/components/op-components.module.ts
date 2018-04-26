import { NgModule } from '@angular/core';
import { OpMenuModule } from './op-menu/op-menu.module';

const modules = [
  OpMenuModule
];

@NgModule({
  exports: [...modules],
  imports: [...modules]
})
export class OpComponentsModule {}
