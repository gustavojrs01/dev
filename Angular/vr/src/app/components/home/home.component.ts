import { Component, OnInit } from '@angular/core';
import { LeccionesService } from "../shared/services/lecciones.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private leccionesService:LeccionesService) { }

  ngOnInit() {
    
  }

}
