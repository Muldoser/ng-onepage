import { NgModule } from '@angular/core';
import { OpFooterModule } from './op-footer/op-footer.module';
import { OpHeaderModule } from './op-header/op-header.module';
import { OpMenuModule } from './op-menu/op-menu.module';
import { OpSectionModule } from './op-section/op-section.module';
import { OpBannerModule } from '@components/op-banner/op-banner.module';

const modules = [
  OpBannerModule,
  OpFooterModule,
  OpHeaderModule,
  OpMenuModule,
  OpSectionModule
];

@NgModule({
  exports: [...modules],
  imports: [...modules]
})
export class OpComponentsModule {}
