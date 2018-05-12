import { Component, ElementRef, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute  } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { EasingLogic, PageScrollInstance, PageScrollService } from 'ngx-page-scroll';

const myEasing: EasingLogic = {
  ease: (t: number, b: number, c: number, d: number): number => {
    // Sinusoidal easing in
    /* return -c * Math.cos(t / d * (Math.PI / 2)) + c + b; */

    // Quadratic easing in
    /* t /= d;
    return c * t * t + b; */

    // Quintic easing in
    t /= d;
    return c * t * t * t * t * t + b;
  }
};

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
export class HomePageComponent implements OnDestroy {
  public pageTop: string = 'pageTop';

  private fragmentSub: Subscription;

  constructor (
    private route: ActivatedRoute,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.fragmentSub = this.route.fragment.subscribe((fragment) => { this.scrollTo(fragment); });
  }

  ngOnDestroy (): void {
    if (this.fragmentSub) { this.fragmentSub.unsubscribe(); }
  }

  private scrollTo (fragment: string): void {
    try {
      if (!!fragment) {
        const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
          document: this.document,
          pageScrollEasingLogic: myEasing,
          scrollTarget: `#${fragment}`
        });
        this.pageScrollService.start(pageScrollInstance);
      } else {
        const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
          document: this.document,
          pageScrollEasingLogic: myEasing,
          scrollTarget: `#${this.pageTop}`
        });
        this.pageScrollService.start(pageScrollInstance);
      }
    } catch (e) {
      /* console.log(e); */
    }
  }
}
