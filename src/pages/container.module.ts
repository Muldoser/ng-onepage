import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { RouterModule } from '@angular/router';
import { OpComponentsModule } from '@components/core';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  ContainerComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    RouterModule,
    OpComponentsModule,
    TranslateModule
  ]
})
export class ContainerModule {}
