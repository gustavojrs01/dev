import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { Actividad1Component } from "./components/actividad1/actividad1.component";
import { Actividad2Component } from "./components/actividad2/actividad2.component";
import { Actividad3Component } from "./components/actividad3/actividad3.component";
import { Actividad4Component } from "./components/actividad4/actividad4.component";
import { Actividad5Component } from "./components/actividad5/actividad5.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'actividad1', component: Actividad1Component },
  { path: 'actividad2', component: Actividad2Component },
  { path: 'actividad3', component: Actividad3Component },
  { path: 'actividad4', component: Actividad4Component },
  { path: 'actividad5', component: Actividad5Component },
  { path: '', pathMatch:'full', redirectTo:"home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
