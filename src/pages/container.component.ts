import { Component } from '@angular/core';

@Component({
  selector: 'op-container',
  styleUrls: ['./container.component.scss'],
  template: `
  <op-header>
    {{ 'App.Title' | translate }}

    <op-menu>
    Menu items here
    </op-menu>
  </op-header>
  <router-outlet></router-outlet>
  `
})
export class ContainerComponent {}
