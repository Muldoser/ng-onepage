import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'op-home',
  styleUrls: ['./home.component.scss'],
  template: `
  <op-banner [id]="pageTop"> {{ 'Header.Welcome' | translate }} </op-banner>

  <op-section id="Example1">
    {{ 'Example1.Title' | translate }}
  </op-section>

  <op-section id="Example2">
  {{ 'Example2.Title' | translate }}
  </op-section>

  <op-footer>
  {{ 'Footer.Copyright' | translate }}
  </op-footer>
  `
})
export class HomePageComponent {
  public pageTop: string = 'pageTop';
  constructor (private route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment) => {
      console.log('fragment: ', fragment);
      this.scrollTo(fragment);
    })
  }

  private scrollTo(fragment: string): void {
    try {
      if (!!fragment) {
        const elements = document.getElementById(fragment);
        elements.scrollIntoView();
      } else {
        const elements = document.getElementById(this.pageTop);
        elements.scrollIntoView();
      }
    } catch (e) {
      /* console.log(e); */
    }
  }
}
