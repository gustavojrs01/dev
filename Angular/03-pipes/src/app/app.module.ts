import { registerLocaleData } from '@angular/common';
import  localeEs from '@angular/common/locales/es-MX';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

registerLocaleData(localeEs, 'es-MX');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
