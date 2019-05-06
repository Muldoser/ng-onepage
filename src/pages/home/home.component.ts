import { Component, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute  } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PageScrollService } from 'ngx-page-scroll-core';

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

  private unsubscribe$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor (
    private route: ActivatedRoute,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.route.fragment
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((fragment: string) => { this.scrollTo(fragment); });
  }

  ngOnDestroy (): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  private scrollTo (fragment: string = this.pageTop): void {
    try {
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: `#${fragment}`
      });
    } catch (e) {
      /* console.error('Error during scroll: ', e); */
    }
  }
}
