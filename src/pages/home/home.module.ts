import { NgModule } from '@angular/core';
import { HomePageComponent } from './home.component';
import { OpComponentsModule } from '../../shared/components/op-components.module';

const components = [
  HomePageComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [OpComponentsModule]
})
export class HomePageModule {}
