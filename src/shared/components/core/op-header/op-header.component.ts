import { ChangeDetectionStrategy, Component, HostBinding, HostListener } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'op-header',
  styleUrls: ['./op-header.component.scss'],
  template: `
  <ng-content></ng-content>
  `
})
export class OpHeaderComponent {
  @HostBinding('class.scroll-top') scrollTop: boolean = false;

  @HostListener('window:scroll', ['$event'])
  public onScroll (event: any): void {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.scrollTop = true;
    } else {
      this.scrollTop = false;
    }
  }
}
