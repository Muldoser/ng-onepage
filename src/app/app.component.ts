import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'environments/environment';
// tslint:disable-next-line:no-var-requires no-require-imports
const nl = require('./i18n/nl-BE.json');
// tslint:disable-next-line:no-var-requires no-require-imports
const en = require('./i18n/en-US.json');

@Component({
  selector: 'op-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor (private translateService: TranslateService) {}

  ngOnInit (): void {
    this.translateService.setTranslation('nl-BE', nl);
    this.translateService.setTranslation('en-US', en);
    this.translateService.use(environment.defaultLanguage);
  }
}
