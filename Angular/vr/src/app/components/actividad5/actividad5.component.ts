import { Component, OnInit } from '@angular/core';
import { LeccionesService } from "../shared/services/lecciones.service";

@Component({
  selector: 'app-actividad5',
  templateUrl: './actividad5.component.html',
  styleUrls: ['./actividad5.component.css']
})
export class Actividad5Component implements OnInit {

  data;

  constructor(private leccionesService:LeccionesService) {
    this.leccionesService.getDatos("l8u1l1y2");
    this.data = this.leccionesService.datos;
    console.log(this.data);
    
   }

  ngOnInit() {
    
  }


}
