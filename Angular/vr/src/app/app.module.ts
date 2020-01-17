import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./shared/material/material.module";
import { StyleManager } from './shared/style-manager/style-manager';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { SpeechRecognizerService } from "./components/shared/services/speech-recognizer.service";
import { SpeechSynthesizerService } from "./components/shared/services/speech-synthesizer.service";
import { LeccionesService } from "./components/shared/services/lecciones.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Actividad1Component } from './components/actividad1/actividad1.component';
import { Actividad2Component } from './components/actividad2/actividad2.component';
import { Actividad3Component } from './components/actividad3/actividad3.component';
import { Actividad4Component } from './components/actividad4/actividad4.component';
import { Actividad5Component } from './components/actividad5/actividad5.component';
import { Unidad1Component } from './components/unidad1/unidad1.component';
import { TestComponent } from './components/test/test.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    Actividad1Component,
    Actividad2Component,
    Actividad3Component,
    Actividad4Component,
    Actividad5Component,
    Unidad1Component,
    TestComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    SpeechRecognizerService,
    SpeechSynthesizerService,
    LeccionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
