import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caja-color',
  templateUrl: './caja-color.component.html',
  styleUrls: ['./caja-color.component.css']
})
export class CajaColorComponent implements OnInit {

  color='blue';
  dias:string[]=['Lunes', 'Martes'];

  constructor() { }

  ngOnInit() {
  }

  setColor(){
    this.color=prompt('Escriba el color');  
    document.getElementById('cajaColor').style.backgroundColor=this.color;
  }

  agregarDia(){
    this.dias.push(prompt('Ingrese un dia'));
  }

}
