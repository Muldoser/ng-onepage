import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContainerModule } from '../pages/container.module';
import { HomePageModule } from '../pages/home/home.module';

const pageModules = [
  HomePageModule,
  ContainerModule
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    ...pageModules,
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule { }
