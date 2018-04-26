import { Component } from '@angular/core';

@Component({
  selector: 'op-home',
  styleUrls: ['./home.component.scss'],
  template: `
  <op-header> Header </op-header>

  <op-section>
    Home page content, section 1
  </op-section>
  <op-section>
    Home page content, section 2
  </op-section>

  <op-footer>
    Footer
  </op-footer>
  `
})
export class HomePageComponent {

}
