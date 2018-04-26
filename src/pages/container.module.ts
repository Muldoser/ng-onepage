import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { RouterModule } from '@angular/router';

const components = [
  ContainerComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [RouterModule]
})
export class ContainerModule {}
