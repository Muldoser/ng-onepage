import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'op-footer',
  styleUrls: ['./op-footer.component.scss'],
  template: `
  <ng-content></ng-content>
  `
})
export class OpFooterComponent {}
