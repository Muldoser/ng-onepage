import { NgModule } from '@angular/core';
import { OpMenuModule } from './op-menu/op-menu.module';
import { OpHeaderModule } from './op-header/op-header.module';
import { OpSectionModule } from './op-section/op-section.module';

const modules = [
  OpHeaderModule,
  OpMenuModule,
  OpSectionModule
];

@NgModule({
  exports: [...modules],
  imports: [...modules]
})
export class OpComponentsModule {}
