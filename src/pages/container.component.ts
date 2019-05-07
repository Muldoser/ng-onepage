import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'op-container',
  styleUrls: ['./container.component.scss'],
  template: `
  <op-header>
    <op-title tappable (click)="goToHome()">{{ 'App.Title' | translate }}</op-title>

    <op-menu [open]="menuOpen" (openClick)="toggleMenu($event)">
      <op-menu-item tappable (click)="goToExample1()">{{ 'Menu.Example1' | translate }}</op-menu-item>
      <op-menu-item tappable (click)="goToExample2()">{{ 'Menu.Example2' | translate }}</op-menu-item>
    </op-menu>
  </op-header>
  <router-outlet></router-outlet>
  `
})
export class ContainerComponent {
  public menuOpen: boolean = false;

  constructor (private router: Router) {}

  public toggleMenu (open: boolean): void {
    this.menuOpen = !open;
  }

  public goToHome (): void {
    this.menuOpen = false;
    this.router.navigate([]);
  }

  public goToExample1 (): void {
    this.menuOpen = false;
    this.router.navigate([], {fragment: 'Example1'});
  }

  public goToExample2 (): void {
    this.menuOpen = false;
    this.router.navigate([], {fragment: 'Example2'});
  }
}
