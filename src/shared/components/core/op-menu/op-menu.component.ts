import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'op-menu',
  styleUrls: ['./op-menu.component.scss'],
  template: `
  <i id="op-menu-bars" class="fa fa-bars" tappable (click)="openClick.emit(open)"></i>
  <div class="op-menu-content" [ngClass]="{'op-menu-open': open}">
    <ng-content></ng-content>
  </div>
  `
})
export class OpMenuComponent {
  @Input() open: boolean;
  @Output() openClick: EventEmitter<boolean> = new EventEmitter();

  public innerWidth: number;

  @HostListener('window:resize', ['$event'])
  public onResize (event: any): void {
    if (this.open) {
      this.openClick.emit(this.open);
    }
  }
}
