import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  terminoBusqueda =
  constructor(private _heroesService:HeroesService) { }

  ngOnInit() {
    this._heroesService.buscarHeroess(termino);
  }

}
