import { HeroesService , Heroe } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[];

  constructor(private _heroesService:HeroesService,
              private router:Router
              ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);    
  }
  verHeroe(idx:number){
    // console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }

}
