import { NgModule } from '@angular/core';
import { OpMenuModule } from './op-menu/op-menu.module';
import { OpHeaderModule } from './op-header/op-header.module';

const modules = [
  OpHeaderModule,
  OpMenuModule
];

@NgModule({
  exports: [...modules],
  imports: [...modules]
})
export class OpComponentsModule {}
