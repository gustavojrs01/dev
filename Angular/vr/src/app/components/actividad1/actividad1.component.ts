import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from "@angular/router";
import { SpeechRecognizerService } from "../shared/services/speech-recognizer.service";
import { SpeechNotification } from "../shared/model/speech-notification";
import { SpeechError } from "../shared/model/speech-error";
import { ActionContext } from "../shared/model/strategy/action-context";
import { SpeechSynthesizerService } from "../shared/services/speech-synthesizer.service";
import { LeccionesService } from "../shared/services/lecciones.service";


@Component({
  selector: 'app-actividad1',
  templateUrl: './actividad1.component.html',
  styleUrls: ['./actividad1.component.css']
})
export class Actividad1Component implements OnInit {

  finalTranscript = '';
  recognizing = false;
  notification: string;
  languages: string[] =  ['en-US'];
  currentLanguage: string;
  actionContext: ActionContext = new ActionContext();
  codigoLeccion:string;
  indiceFrase = 0;
  contIncorrectas = 0;
  voz:string = "h";
  datos;  
  act="act1";
  
  

  constructor(private router:Router,
              private changeDetector:ChangeDetectorRef,
              private speechRecognizer:SpeechRecognizerService,
              private speechSynthesizer:SpeechSynthesizerService,
              private leccionesService:LeccionesService) { 
                this.codigoLeccion = localStorage.getItem("codigoLeccion");
                this.leccionesService.getDatos(this.leccionesService.codigoLeccion);
                // this.datos= this.leccionesService.datos;
                // this.codigoLeccion = this.leccionesService.datos.codigo;
                // this.leccionesService.getDatos(this.codigoLeccion);
                // this.datos=this.leccionesService.datos;
                // this.datos = this.leccionesService.getConfig("l8u1l3y4");
                this.leccionesService.codigoLeccion=this.codigoLeccion;
                console.log("constructor");
                console.log(this.leccionesService.cargada);
                console.log(localStorage.getItem("codigoLeccion"));
                

              }

  ngOnInit() {
    // this.leccionesService.getDatos(this.codigoLeccion);
    // this.datos= this.leccionesService.datos;
    this.currentLanguage = this.languages[0];
    this.speechRecognizer.initialize(this.currentLanguage);
    this.initRecognition();
    this.notification = null;
    
        
    document.getElementById("divInfo").addEventListener('mouseover', mostrarInfo1);
    document.getElementById("divInfo").addEventListener('mouseout', ocultaInfo);

    function mostrarInfo1(){
	    document.getElementById("contenedorInfo").className  = 'mostrarInfo';
    }
    function ocultaInfo(){
      document.getElementById("contenedorInfo").className  = "ocultaInfo";
    }
    // this.Punidad = document.getElementById('Punidad');
    this.phrasePara = document.querySelector('.phrase');
    this.resultPara = document.querySelector('.result');
    this.diagnosticPara = document.querySelector('.output');
    this.resultado = document.querySelector('.resultado');
    this.divCorrecto = document.getElementById('correcto');
    this.divIncorrecto = document.getElementById('incorrecto');
    this.vozHombre = <HTMLInputElement>document.getElementById('vozHombre');
    this.vozMujer = <HTMLInputElement>document.getElementById('vozMujer');
    this.vozMaquina = <HTMLInputElement>document.getElementById('vozMaquina');
    this.botonPlay = <HTMLElement>document.getElementById('botonPlay');
    this.play = <HTMLInputElement>document.getElementById('play');
    // this.pFrase = <HTMLElement>document.getElementById('pFrase');
    console.log("init");

    
  }

  cabecera = {
    "curso":"Level 8",
    "unidad":"U2",
    "leccion":"L 3-4"
  }
  leccion = {
    "curso":"Level 8",
    "unidad":"U1",
    "leccion":"L 3-4",
    "act1":[
        "Email", 
        "On", 
        "Download", 
        "Always", 
        "Usually", 
        "Generally", 
        "Often", 
        "Sometimes", 
        "Occasionally",
        "Hardly Ever",
        "Never",
        "Send Emails",
        "Text messaging",
        "Download"
    ],
    "act2":[
        "I sent you an email",
        "I texted my mom",
        "I generally download music and movies",
        "We always upload pictures to our social networks",
        "I never send emails on Sunday",
        "She often calls me on Friday",
        "He opened his account in 2014"
    ],
    "act3":[
        "Do you have a social media account?",
        "Yes, I do! I opened it in 2016",
        "I sent you an email",
        "I last checked my email in December",
        "Why?",
        "Because, I forgot my password"
    ],
    "act4":"I always post pictures of my mom on December 15th, because it's her birthday. I talk to her every day at 6:00, when I get home. Sometimes, I check my phone and answer my emails in the afternoon.",
    "act5":[
        "Email",
        "On",
        "Download",
        "Often",
        "Sometimes",
        "Occasionally",
        "I texted my mom",
        "I generally download music and movies",
        "We always upload pictures to our social network",
        "She often calls me on Friday",
        "I opened it in 2016",
        "I last checked my e-mail in December",
        "I always use the same password for everything",
        "I occasionally do that"
    ]
  }
 





  pFrase;

  phrasePara:HTMLElement;
  resultPara:HTMLElement;
  diagnosticPara:HTMLElement;
  resultado:HTMLElement;
  divCorrecto:HTMLElement;
  divIncorrecto:HTMLElement;
  vozHombre:HTMLInputElement;
  vozMujer:HTMLInputElement;
  vozMaquina:HTMLInputElement;
  botonPlay:HTMLElement;
  play:HTMLInputElement;
  // fraseLeida = document.getElementById('fraseLeida');
  // espectro = document.getElementById('espectro');
  // voiceSelect = document.querySelector('select');
  // ok = document.getElementById('ok');
  
  
  //var testBtn = document.querySelector('button');
  // testBtn = document.getElementById('botonEscucha');
  // divInfo = document.getElementById('divInfo');
  // btnStart = document.getElementById('btnStart');
  // siguiente = document.getElementById('siguiente');
  // next = document.getElementById('next');
  // contenedorInfo = document.getElementById('contenedorInfo');
  // tryAgain = document.getElementById('tryAgain');
  // lnkNext = document.getElementById('lnkNext');
  
  // Punidad = document.getElementById('Punidad');
  // Pnombre = document.getElementById('Pnombre');
  // Pactividad = document.getElementById('Pactividad');
  // Punidad:HTMLElement;
  
 
  
  
  
  start(){
    // this.leccionesService.getDatos(this.leccionesService.codigoLeccion);
    this.datos= this.leccionesService.datos;
    // console.log(this.datos);
    // this.btnPlay.style.visibility="visible";
    // this.pFrase.textContent = "Hola mundo";
    document.getElementById('pFrase').textContent = this.datos.act1[0];
    document.getElementById('botonPlay').style.display="block";
    document.getElementById('botonEscucha').style.display="block";
    document.getElementById('botonEscuchadiv').style.display="block";
    document.getElementById('btnStart').style.display="none";
    document.getElementById('ecogeVoz').style.visibility="visible";
    document.getElementById('pFrase').style.display="block";
  
  }

  siguienteFrase(){
    // let cantidad = this.leccion.act1.length;
    if (this.indiceFrase == 12){
      alert("No hay mas palabras a mostrar");
      this.router.navigate(['actividad2']);
    }
    // console.log(this.pFrase);
    this.indiceFrase = this.indiceFrase+1;
    document.getElementById('pFrase').textContent = this.datos.act1[this.indiceFrase];

  }

  startButton(event) {
    if (this.recognizing) {
      this.speechRecognizer.stop();
      return;
    }

    this.speechRecognizer.start(event.timeStamp);
  }

  onSelectLanguage(language: string) {
    this.currentLanguage = language;
    this.speechRecognizer.setLanguage(this.currentLanguage);
  }

  private initRecognition() {
    this.speechRecognizer.onStart()
      .subscribe(data => {
        this.recognizing = true;
        this.notification = 'I\'m listening...';
        this.detectChanges();
      });

    this.speechRecognizer.onEnd()
      .subscribe(data => {
        this.recognizing = false;
        this.detectChanges();
        this.notification = null;
      });

    this.speechRecognizer.onResult()
      .subscribe((data: SpeechNotification) => {
        const message = data.content.trim();
        if (data.info === 'final_transcript' && message.length > 0) {
          this.finalTranscript = `${this.finalTranscript}\n${message}`;
          this.actionContext.processMessage(message, this.currentLanguage);
          this.detectChanges();
          this.actionContext.runAction(message, this.currentLanguage);
        }
      });

    this.speechRecognizer.onError()
      .subscribe(data => {
        switch (data.error) {
          case SpeechError.BLOCKED:
          case SpeechError.NOT_ALLOWED:
            this.notification = `Cannot run the demo.
            Your browser is not authorized to access your microphone. Verify that your browser has access to your microphone and try again.
            `;
            break;
          case SpeechError.NO_SPEECH:
            this.notification = `No speech has been detected. Please try again.`;
            break;
          case SpeechError.NO_MICROPHONE:
            this.notification = `Microphone is not available. Plese verify the connection of your microphone and try again.`;
            break;
          default:
            this.notification = null;
            break;
        }
        this.recognizing = false;
        this.detectChanges();
      });
  }

  detectChanges() {
    this.changeDetector.detectChanges();
  }
 

  repro(){
    // this.datos= this.leccionesService.datos;
    this.speechSynthesizer.speak(this.datos.act1[this.indiceFrase],"en-US");    
  }
  
  

  escucha(){    
    //*************************************************************************************** */
    //                              Ejemplo de SpeechSynthesis                     
    //   var utterance  = new SpeechSynthesisUtterance();
    //   utterance.text = 'My name\'s Guybrush Threepwood, and I want to be a pirate!';
    //   utterance.lang = "en-US";
    //   speechSynthesis.getVoices().forEach(function(voice) {
    //     console.log('Hi! My name is ', voice.name);
    //  });
    //   utterance.voice = speechSynthesis.getVoices()[3];
    //   speechSynthesis.speak(utterance);
    //**************************************************************************************** */
    
    
    this.datos= this.leccionesService.datos;
    this.vozHombre.disabled = true;
    this.vozMujer.disabled = true;
    this.vozMaquina.disabled = true;
    this.play.disabled = true;
    this.botonPlay.style.display="none";
    if (this.voz == "0"){
        this.speechSynthesizer.speak(this.datos.act1[this.indiceFrase],"en-US");
        this.speechSynthesizer.message.onend =()=>{
          this.audioEnd();
        };
    }
    else{
		  this.playSound();
    }
  }

  playSound() {

    let sonido = new Audio();
    sonido.src = "/assets/audio/" + this.codigoLeccion + '/' + this.act + '/' + this.voz + '/' + this.indiceFrase + ".mp3";
    sonido.play();
    sonido.addEventListener("ended", ()=>{
      sonido.currentTime = 0;
      this.botonPlay.style.display="block";
      this.play.disabled = false;
      this.audioEnd();
    });    
  }
  
  
  // playSound(el,soundfile) {
	//   this.vozHombre.disabled = true;
  //   this.vozMujer.disabled = true;
  //   this.vozMaquina.disabled = true;
  //   this.btnPlay.disabled = true;
	//   el.mp3 = new Audio(soundfile);
	//   el.mp3.play();
	//   el.mp3.onended = () => {this.audioEnd}
  // }

  audioEnd(){
    this.vozHombre.disabled = false;
    this.vozMujer.disabled = false;
    this.vozMaquina.disabled = false;
    this.play.disabled = false;
    this.botonPlay.style.display = "block";
  }

  cambiaVozH(){
    this.voz = 'h';
    this.escucha();
  }
  cambiaVozM(){
	  this.voz = 'm';
	  this.escucha();
  }
  cambiaVozMaq(){
    this.voz= '0';
    this.escucha();
  } 

  // showConfig() {
  //   this.leccionesService.getConfig(this.codigoLeccion)
  //     .subscribe((data) => this.lecciones1 = {
  //         curso: data['curso'],
  //         unidad: data['unidad'],
  //         leccion: data['leccion'],
  //         act1: data['act1'],
  //         act2: data['act2'],
  //         act3: data['act3'],
  //         act4: data['act4'],
  //         act5: data['act5'],
  //     });
  // }



}
