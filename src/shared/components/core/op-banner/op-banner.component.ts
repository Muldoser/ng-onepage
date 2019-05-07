import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'op-banner',
  styleUrls: ['./op-banner.component.scss'],
  template: `
  <ng-content></ng-content>
  `
})
export class OpBannerComponent {}
