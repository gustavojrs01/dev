import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad1',
  templateUrl: './actividad1.component.html',
  styleUrls: ['./actividad1.component.css']
})
export class Actividad1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cabecera = {
    "curso":"Level 8",
    "unidad":"U2",
    "leccion":"L 3-4"
  }

  phrasePara = document.querySelector('.phrase');
  resultPara = document.querySelector('.result');
  diagnosticPara = document.querySelector('.output');
  resultado = document.querySelector('.resultado');
  //var testBtn = document.querySelector('button');
  testBtn = document.getElementById('botonEscucha');
  //var divCorrecto = document.getElementById('correcto');
  //var divIncorrecto = document.getElementById('incorrecto');
  voiceSelect = document.querySelector('select');
  fraseLeida = document.getElementById('fraseLeida');
  indiceFrase = 0;
  contIncorrectas = 0;
  btnStart = document.getElementById('btnStart');
  pFrase = document.getElementById('pFrase');
  espectro = document.getElementById('espectro');
  siguiente = document.getElementById('siguiente');
  next = document.getElementById('next');
  
  divInfo = document.getElementById('divInfo');
  contenedorInfo = document.getElementById('contenedorInfo');
  ok = document.getElementById('ok');
  tryAgain = document.getElementById('tryAgain');
  lnkNext = document.getElementById('lnkNext');
  
  Pnombre = document.getElementById('Pnombre');
  Pactividad = document.getElementById('Pactividad');
  Punidad = document.getElementById('Punidad');
  
  voices = [];
  
  vozHombre = document.getElementById('vozHombre');
  vozMujer = document.getElementById('vozMujer');
  vozMaquina = document.getElementById('vozMaquina');
  voz = '11';
  
  btnPlay = document.getElementById('botonPlay');
  start(){
    this.btnPlay.style.visibility="visible";
    // document.getElementById('botonPlay').style.visibility="visible";
    // alert("Funciona");
  
  }


}
