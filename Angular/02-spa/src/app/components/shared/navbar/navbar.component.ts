import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {
  }
  
  buscarHeroes(termino:string){
    // console.log (termino);
    this.router.navigate(['/busqueda', termino]);
    
  }

}
