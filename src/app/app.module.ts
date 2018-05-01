import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OpComponentsModule } from '@components/op-components.module';
import { PagesModule } from '@pages/pages.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OpComponentsModule,
    PagesModule
  ],
  providers: []
})
export class AppModule { }
