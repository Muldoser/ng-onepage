import { NgModule } from '@angular/core';
import { OpBannerComponent } from './op-banner.component';

const components = [
  OpBannerComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class OpBannerModule {}
