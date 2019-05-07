import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'op-title',
  styleUrls: ['./op-title.component.scss'],
  template: `
  <ng-content></ng-content>
  `
})
export class OpTitleComponent {}
