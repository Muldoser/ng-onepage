import { Component } from '@angular/core';

@Component({
  selector: 'op-home',
  styleUrls: ['./home.component.scss'],
  template: `
  <op-header> {{ 'Header.Welcome' | translate }} </op-header>

  <op-section>
    {{ 'Example1.Title' | translate }}
  </op-section>
  <op-section>
  {{ 'Example2.Title' | translate }}
  </op-section>

  <op-footer>
  {{ 'Footer.Copyright' | translate }}
  </op-footer>
  `
})
export class HomePageComponent {

}
