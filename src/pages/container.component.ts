import { Component } from '@angular/core';

@Component({
  selector: 'op-container',
  styleUrls: ['./container.component.scss'],
  template: `
  <op-header>
    <op-title>{{ 'App.Title' | translate }}</op-title>

    <op-menu>
      <op-menu-item>Home</op-menu-item>
      <op-menu-item>About</op-menu-item>
    </op-menu>
  </op-header>
  <router-outlet></router-outlet>
  `
})
export class ContainerComponent {}
