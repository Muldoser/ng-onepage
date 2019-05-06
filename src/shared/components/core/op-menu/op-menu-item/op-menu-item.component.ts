import { Component, Optional } from '@angular/core';
import { OpMenuComponent } from '../op-menu.component';

@Component({
  selector: 'op-menu-item',
  styleUrls: ['./op-menu-item.component.scss'],
  template: `
  <ng-content></ng-content>
  `
})
export class OpMenuItemComponent {
  constructor (@Optional() parent: OpMenuComponent) {
    if (!parent) {
      throw '<op-menu-item> should ONLY be used inside a <op-menu>';
    }
  }
}
