import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes:any[]=[];
  
  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['termino']);
      this.heroes= this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
    } );
    
  }

}
