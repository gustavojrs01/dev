import { Component } from '@angular/core';
import { LeccionesService } from "./components/shared/services/lecciones.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private leccionesService:LeccionesService){
    this.leccionesService.cargada="Esto es el appComponent";
    console.log(this.leccionesService.cargada);
  }
}
