import { NgModule } from '@angular/core';
import { ContainerModule } from './container.module';
import { HomePageModule } from './home/home.module';
import { OpComponentsModule } from '@components/core/op-components.module';

const modules = [
    ContainerModule,
    HomePageModule
];

@NgModule({
  exports: [...modules],
  imports: [
    ...modules,
    OpComponentsModule
  ]
})
export class PagesModule {}
