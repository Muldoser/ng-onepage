import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'op-menu',
  styleUrls: ['./op-menu.component.scss'],
  template: `
  <i id="op-menu-bars" class="fa fa-bars" tappable (click)="toggle()"></i>
  <div class="op-menu-content" [ngClass]="{'op-menu-open': open}">
    <ng-content></ng-content>
  </div>
  `
})
export class OpMenuComponent {
  @Input() open: boolean;
  public innerWidth: number;

  @HostListener('window:resize', ['$event'])
  public onResize (event: any): void {
    if (this.open) { this.open = false; }
  }

  public toggle (): void { this.open = !this.open; }
}
