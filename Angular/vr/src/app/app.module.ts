import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Actividad1Component } from './components/actividad1/actividad1.component';
import { Actividad2Component } from './components/actividad2/actividad2.component';
import { Actividad3Component } from './components/actividad3/actividad3.component';
import { Actividad4Component } from './components/actividad4/actividad4.component';
import { Actividad5Component } from './components/actividad5/actividad5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    Actividad1Component,
    Actividad2Component,
    Actividad3Component,
    Actividad4Component,
    Actividad5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
