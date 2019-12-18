import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { registerLocaleData } from '@angular/common';
import  localeEs from '@angular/common/locales/es-MX';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FeatureRoutingModule } from "./routes";

import { AppComponent } from './app.component';
import { CajaColorComponent } from './componentes/caja-color/caja-color.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

registerLocaleData(localeEs, 'es-MX');

@NgModule({
  declarations: [
    AppComponent,
    CajaColorComponent,
    CapitalizadoPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
