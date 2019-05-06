import { NgModule } from '@angular/core';
import { HomePageComponent } from './home.component';
import { OpComponentsModule } from '@components/core';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  HomePageComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    OpComponentsModule,
    TranslateModule
  ]
})
export class HomePageModule {}
