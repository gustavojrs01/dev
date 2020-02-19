import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from "@angular/router";
import { SpeechRecognizerService } from "../shared/services/speech-recognizer.service";
import { SpeechNotification } from "../shared/model/speech-notification";
import { SpeechError } from "../shared/model/speech-error";
import { ActionContext } from "../shared/model/strategy/action-context";
import { SpeechSynthesizerService } from "../shared/services/speech-synthesizer.service";
import { LeccionesService, Lecciones } from "../shared/services/lecciones.service";
import { AppWindow } from '../shared/model/app-window';
import * as jsdiff from 'diff';

const { webkitSpeechRecognition }: AppWindow = (window as any) as AppWindow;

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
  datos:Lecciones;  
  act="act1";
  phrases = new Array();
  unidad:string;
  leccion:string;
  curso:string;
  tituloContenido:string;
  leccionContenido:string;
  linea1Contenido:string;
  linea2Contenido:string;
  linea3Contenido:string;
  actividadCompletada = false;  

  constructor(private router:Router,
              private changeDetector:ChangeDetectorRef,
              private speechRecognizer:SpeechRecognizerService,
              private speechSynthesizer:SpeechSynthesizerService,
              private leccionesService:LeccionesService) { 
                this.codigoLeccion = localStorage.getItem("codigoLeccion");
                // this.leccionesService.getDatos(this.leccionesService.codigoLeccion);    Este Funciona
                this.leccionesService.getDatos(localStorage.getItem("codigoLeccion"));

                this.unidad = localStorage.getItem("unidad");
                this.curso = localStorage.getItem("curso");
                this.leccion = localStorage.getItem("leccion");
                this.actividadCompletada = this.validarLeccionCompletada(localStorage.getItem("actividad1completada"));
                // this.datos= this.leccionesService.datos;
                // this.codigoLeccion = this.leccionesService.datos.codigo;
                // this.leccionesService.getDatos(this.codigoLeccion);
                // this.datos=this.leccionesService.datos;
                // this.datos = this.leccionesService.getConfig("l8u1l3y4");
                // this.leccionesService.codigoLeccion=this.codigoLeccion;               Este funciona
                this.leccionesService.codigoLeccion=localStorage.getItem("codigoLeccion");
                
                console.log(localStorage.getItem("codigoLeccion"));
                console.log("Completada?"+this.actividadCompletada);
              }

  ngOnInit() {
    function mostrarInfo1(){
	    document.getElementById("contenedorInfo").className  = 'mostrarInfo';
    }
    function ocultaInfo(){
      document.getElementById("contenedorInfo").className  = "ocultaInfo";
    }
    // this.leccionesService.getDatos(this.codigoLeccion);
    // this.datos= this.leccionesService.datos;
    this.currentLanguage = this.languages[0];
    this.speechRecognizer.initialize(this.currentLanguage);
    this.initRecognition();
    this.notification = null;        
    document.getElementById("divInfo").addEventListener('mouseover', mostrarInfo1);
    document.getElementById("divInfo").addEventListener('mouseout', ocultaInfo);    
    // this.Punidad = document.getElementById('Punidad');
    this.phrasePara = document.querySelector('.phrase');
    this.resultPara = document.querySelector('.result');
    this.diagnosticPara = <HTMLParagraphElement>document.getElementById('output');
    this.resultado = document.querySelector('.resultado');
    this.divCorrecto = document.getElementById('correcto');
    this.divIncorrecto = document.getElementById('incorrecto');
    this.vozHombre = <HTMLInputElement>document.getElementById('vozHombre');
    this.vozMujer = <HTMLInputElement>document.getElementById('vozMujer');
    this.vozMaquina = <HTMLInputElement>document.getElementById('vozMaquina');
    this.botonPlay = <HTMLElement>document.getElementById('botonPlay');
    this.play = <HTMLInputElement>document.getElementById('play');
    this.espectro = <HTMLElement>document.getElementById('espectro');
    this.fraseLeida = <HTMLElement>document.getElementById('fraseLeida');
    this.siguiente = <HTMLElement>document.getElementById('siguiente');
    this.tryAgain = <HTMLElement>document.getElementById('tryAgain');
    this.ok = <HTMLElement>document.getElementById('ok');
    this.next = <HTMLElement>document.getElementById('lnkNext');
    this.resultadoDiff = <HTMLElement>document.getElementById("resultadoDiff");
    this.display = document.getElementById('display');
    this.ok.style.display = "none";
    this.tryAgain.style.display = "none";
    this.resultadoDiff.textContent = "";
    this.output = <HTMLParagraphElement>document.getElementById('output');
    // this.pFrase = <HTMLElement>document.getElementById('pFrase');    
  }

  display:HTMLElement;
  pFrase;
  phrasePara:HTMLElement;
  resultPara:HTMLElement;
  diagnosticPara:HTMLParagraphElement;
  resultado:HTMLElement;
  divCorrecto:HTMLElement;
  divIncorrecto:HTMLElement;
  vozHombre:HTMLInputElement;
  vozMujer:HTMLInputElement;
  vozMaquina:HTMLInputElement;
  botonPlay:HTMLElement;
  play:HTMLInputElement;
  espectro:HTMLElement;
  phrase;
  fraseLeida:HTMLElement;
  siguiente:HTMLElement;
  tryAgain:HTMLElement;
  ok:HTMLElement;
  next:HTMLElement;
  resultadoDiff:HTMLElement;
  output:HTMLParagraphElement;
  // voiceSelect = document.querySelector('select');
  //var testBtn = document.querySelector('button');
  // testBtn = document.getElementById('botonEscucha');
  // divInfo = document.getElementById('divInfo');
  // btnStart = document.getElementById('btnStart');  
  
  // contenedorInfo = document.getElementById('contenedorInfo');  
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
    this.siguiente.style.display = "none";
    this.contIncorrectas = 0;
    this.diagnosticPara.textContent = "";
    this.resultadoDiff.textContent = "";
    if (this.indiceFrase == 13){
      // alert("No hay mas palabras a mostrar");
      // this.router.navigate(['actividad2']);
      this.siguiente.style.display = "none";
      document.getElementById('ecogeVoz').style.visibility="hidden";
      document.getElementById('botonPlay').style.display="none";
      document.getElementById('botonEscucha').style.display="none";
      document.getElementById('botonEscuchadiv').style.display="none";
      this.diagnosticPara.textContent = "Good Job! Go to the next activity";
      localStorage.setItem("actividad1completada", "true");
      this.actividadCompletada = this.validarLeccionCompletada(localStorage.getItem("actividad1completada"));
      // this.next.style.display = "block";
    }
    console.log(this.actividadCompletada);
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
    // this.finalTranscript="";
    this.speechRecognizer.onStart()
      .subscribe(data => {
        this.recognizing = true;
        this.tryAgain.style.display = "none"
        this.espectro.style.display="block";
        this.notification = 'I\'m listening...';
        this.diagnosticPara.style.color = "chocolate";
        this.diagnosticPara.textContent = "Listening";
        this.resultadoDiff.textContent = "";
        this.detectChanges();
      });

    this.speechRecognizer.onEnd()
      .subscribe(data => {
        this.recognizing = false;
        this.espectro.style.display="none";
        this.notification = null;
        // this.diagnosticPara.textContent = "";
        // this.espectro.style.display = "none";
        console.log(this.finalTranscript);
        if (this.finalTranscript=="" || this.finalTranscript==" " || this.finalTranscript== null ){
          this.diagnosticPara.style.color = "firebrick";
          this.diagnosticPara.textContent = "Oops, i didn't hear you, please try again";
        }
        this.finalTranscript="";
        this.detectChanges();
      });

    this.speechRecognizer.onResult()
      .subscribe((data: SpeechNotification) => {
        const message = data.content.trim();
        if (data.info === 'final_transcript' && message.length > 0) {
          this.finalTranscript = `${message}`;
          // this.finalTranscript = `${this.finalTranscript}\n${message}`;          
          this.actionContext.processMessage(message, this.currentLanguage);
          this.actionContext.runAction(message, this.currentLanguage);
          var speechResult = this.finalTranscript.toLowerCase();
          this.diagnosticPara.textContent = this.datos.act1[this.indiceFrase];
          var acomparar:string;
          let speechResultF:string;
          acomparar = this.datos.act1[this.indiceFrase];
          acomparar = acomparar.replace(/-/g,"");
          acomparar = acomparar.replace(/,/g,"");
          acomparar = acomparar.replace(/\./g,"");
          acomparar = acomparar.replace(/!/g, "");
          acomparar = acomparar.replace(/\?/g, "");
          acomparar = acomparar.toLowerCase();
          if (speechResult == acomparar){
            let playOk = new Audio;
            playOk.src = "/assets/audio/ok.mp3";
            playOk.volume = 0.05;
            playOk.play();
            this.ok.style.display = "block";
            setTimeout(()=>{
              this.ok.style.display = "none";
            }, 2000);
            this.espectro.style.display = "none";
            this.siguiente.style.display = "block";
            this.diagnosticPara.style.color = "green";
            this.recognizing = false;                         //   ESTE ES NUEVO, TEST ERROR            
          } else{
            this.diagnosticPara.textContent = "";            
            let diff = jsdiff.diffWords(acomparar, speechResult);
            // var display = document.getElementById('display');
            var fragment = document.createDocumentFragment();
            diff.forEach(function(part){
              let color = part.added ? 'red' :
              part.removed ? 'black' : 'green';
              let tdecoration = part.added ? "none" : part.removed ? "line-through" : "none";
              
              var span = document.createElement('span');
              span.style.color = color;
              span.style.textDecoration = tdecoration;
              span.appendChild(document
                .createTextNode(part.value));
                fragment.appendChild(span);
              });
              // this.display.appendChild(fragment);
              this.output.appendChild(fragment);
              console.log(diff);
              let playError = new Audio;
              playError.src = "/assets/audio/tryagain.mp3";
              playError.volume = 0.05;
              playError.play();
              this.contIncorrectas=this.contIncorrectas+1;
              if (this.contIncorrectas == 3){
                this.siguiente.style.display= "block";
              }
              this.espectro.style.display = "none";
              this.diagnosticPara.style.color = "firebrick";
              this.tryAgain.style.display = "block";
              setTimeout(()=>{
                this.tryAgain.style.display = "none";
              },5000);
              this.recognizing = false;                       //Este es nuevo TEST ERROR
            }
            
            
            
          }
          this.detectChanges();

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
        this.espectro.style.display = "none";
        this.diagnosticPara.style.color="firebrick";
        this.diagnosticPara.textContent=this.notification;
        
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
  
  goToBackActivity(){
    this.router.navigate(["/home"]);
  }
  
  goToNextActivity(){
    this.router.navigate(["/actividad2"]);
    
  }
  
  validarLeccionCompletada(variable:string){
    if (variable == "true"){
      return true;
    } else{
      return false;
    }
  }
  
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
  
  // reconocimiento(){
    //   let phrase = this.datos.act1[this.indiceFrase];
    //   this.espectro.style.display="block";
    //   this.diagnosticPara.textContent = "Listening";
    //   this.resultado.textContent = '';
    //   // this.phrase = this.phrase.toLowerCase();
    //   // this.phrase = this.phrase.trim();
    
    //   var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase +';';
  //   let recognition = new webkitSpeechRecognition();
  //   // let recognition = new SpeechRecognition();                          ESTE VA
  //   var speechRecognitionList = new SpeechGrammarList();
  //   speechRecognitionList.addFromString(grammar, 1);
  //   recognition.grammars = speechRecognitionList;
  //   recognition.lang = 'en-US';
  //   recognition.interimResults = false;
  //   recognition.maxAlternatives = 1;
    
  //   recognition.start();
    
  //   recognition.onresult = (event)=> {
      
  //     // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  //     // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  //     // It has a getter so it can be accessed like an array
  //     // The first [0] returns the SpeechRecognitionResult at position 0.
  //     // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  //     // These also have getters so they can be accessed like arrays.
  //     // The second [0] returns the SpeechRecognitionAlternative at position 0.
  //     // We then return the transcript property of the SpeechRecognitionAlternative object
  //     var speechResult = event.results[0][0].transcript.toLowerCase();
  //     this.diagnosticPara.textContent = '.' + speechResult + '.';
  //     var phrase2 = phrase;
  //     phrase2 = phrase2.replace(/\?/g, "");
  //     phrase2 = phrase2.replace(/-/g, "");
  //     phrase2 = phrase2.replace(/,/g, "");
  //     phrase2 = phrase2.replace(/\./g, "");
  //     phrase2 = phrase2.replace(/\!/g, "");
  //     if(speechResult === phrase2) {
  //       //resultPara.textContent = 'Frase dicha correctamente!';
  //       //resultPara.style.background = 'yellow';
  //       //divCorrecto.style.visibility= 'visible';
  //       //Fspeak2('ok');
  //       // ok.style.opacity='1';                                    ESTE VA
  //       // $("#ok").fadeIn(1000); //Despues de 2000                 ESTE VA
  //       // $("#ok").fadeOut(4000);                                  ESTE VA
  //     this.fraseLeida.style.color= 'green';
  //     //indiceFrase = indiceFrase + 1;
  //     this.siguiente.style.display='block';
  //     // this.phrasePara.textContent = phrases[indiceFrase];          ESTE VA
  //     // this.diagnosticPara.textContent = phrasePara.textContent;    ESTE VA
  //     this.resultado.style.visibility="hidden";
        
  //       // playSound(this, 'ok.mp3');                                  ESTE VA
  //     } else {
  //       //resultPara.textContent = 'Eso no suena bien....';
  //       //resultPara.style.background = 'red';
  //       //divIncorrecto.style.visibility= 'visible';
  //       //Fspeak2('try again');
  //       this.tryAgain.style.opacity='1';
  //       //  $("#tryAgain").fadeIn(1000); //Despues de 2000                 ESTE VA
  //       //  $("#tryAgain").fadeOut(4000);                                  ESTE VA
  //       this.resultado.style.visibility="visible";	
  //       this.contIncorrectas = this.contIncorrectas + 1;
  //       this.fraseLeida.style.color= 'blue';
  //       this.resultado.style.color= 'red';
  //     //  playSound(this, 'tryagain.mp3');                             ESTE VA
  //       if (this.contIncorrectas == 6)
  //       {
  //         this.contIncorrectas = 0
  //         this.siguiente.style.display='block';
  //       }
  
  //     }
  //     //resultado.textContent = ' <div class=\"container--compare-blocks\"><div class=\"compare-block compare-block-two\"><div class=\"block\" id=\"block2\"><p class=\"phrase\"></p></div></div><div class=\"compare-block compare-block-one\">	<div class=\"block\" id=\"block1\">	<p class=\"output\"></p></div></div><article class=\"container--diff\">	<section id=\"diff\" class=\"diff\"></section></article></div><script src=\"js/libs/jquery-1.11.1.min.js\" type=\"text/javascript\" charset=\"utf-8\"></script>	<script src=\"js/index.js\" type=\"text/javascript\" charset=\"utf-8\"></script>';
  
      
      
  
      
  //     // console.log(result);
  //     // this.resultadoDiff.textContent = result.differences2.join('\n');
  //     /*phrasePara.textContent = texto + '\n' + result.differences2.join('\n');*/
  //     // console.log('Confidencia: ' + event.results[0][0].confidence);
  //   }
      
  // }  




