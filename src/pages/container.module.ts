import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { RouterModule } from '@angular/router';
import { OpComponentsModule } from '@components/op-components.module';

const components = [
  ContainerComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    RouterModule,
    OpComponentsModule
  ]
})
export class ContainerModule {}
