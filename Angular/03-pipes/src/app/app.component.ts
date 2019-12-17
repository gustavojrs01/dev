import { Component } from '@angular/core';
import { registerLocaleData } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = "GUSTAVO rodriguez";
  arreglo=[1,2,3,4,5,6,7,8,9];

  PI = Math.PI;
  porcentaje= 0.25;
  salario=3000.4666;
  hoy = new Date;
}
