import { NgModule } from '@angular/core';
import { OpFooterComponent } from './op-footer.component';

const components = [
  OpFooterComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class OpFooterModule {}
