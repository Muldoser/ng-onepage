import { Component } from '@angular/core';

@Component({
  selector: 'op-container',
  styleUrls: ['./container.component.scss'],
  template: `
  <op-menu>{{ 'App.Title' | translate }}</op-menu>
  <router-outlet></router-outlet>
  `
})
export class ContainerComponent {}
