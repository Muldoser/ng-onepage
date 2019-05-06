import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpMenuComponent } from './op-menu.component';
import { OpMenuItemComponent } from './op-menu-item/op-menu-item.component';

const components = [
  OpMenuComponent,
  OpMenuItemComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule]
})
export class OpMenuModule {}
