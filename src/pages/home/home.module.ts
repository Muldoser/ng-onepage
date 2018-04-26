import { NgModule } from '@angular/core';
import { HomePageComponent } from './home.component';

const components = [
  HomePageComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class HomePageModule {}
