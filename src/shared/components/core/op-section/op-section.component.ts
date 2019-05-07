import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'op-section',
  styleUrls: ['./op-section.component.scss'],
  template: `
  <ng-content></ng-content>
  `
})
export class OpSectionComponent {}
