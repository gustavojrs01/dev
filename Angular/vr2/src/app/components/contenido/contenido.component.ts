import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpeechRecognizerService } from "../shared/services/speech-recognizer.service";
import { SpeechNotification } from "../shared/model/speech-notification";
import { SpeechError } from "../shared/model/speech-error";
import { ActionContext } from "../shared/model/strategy/action-context";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  tituloContenido= "Lesson";
  leccionContenido:string;
  linea1Contenido:string;
  linea2Contenido:string;
  linea3Contenido:string;
  finalTranscript = '';
  recognizing = false;
  notification: string;
  languages: string[] =  ['en-US'];
  currentLanguage: string;
  actionContext: ActionContext = new ActionContext();
  codigoLeccion:string;
  espectro:HTMLElement;
  diagnosticPara:HTMLElement;
  background:HTMLElement;
  // indiceFrase = 0;
  // contIncorrectas = 0;
  // voz:string = "h";
  // datos:Lecciones;  
  // act="act1";
  phrases = new Array();
  // unidad:string;
  // leccion:string;
  // curso:string;


  constructor(private changeDetector:ChangeDetectorRef,
              private speechRecognizer:SpeechRecognizerService,
              private router:Router) { 
    this.tituloContenido = localStorage.getItem("tituloContenido");
    this.leccionContenido = localStorage.getItem("leccionContenido");
    this.linea1Contenido = localStorage.getItem("linea1Contenido");
    this.linea2Contenido = localStorage.getItem("linea2Contenido");
    this.linea3Contenido = localStorage.getItem("linea3Contenido");
    
    
  }

  
  ngOnInit() {
    this.espectro = <HTMLElement>document.getElementById('espectro');
    this.diagnosticPara = <HTMLElement>document.getElementById("instrucciones");
    this.background = <HTMLElement>document.getElementById("contenedor");
    // this.blink = <HTMLElement>document.getElementById ("blink");
    this.currentLanguage = this.languages[0];
    this.speechRecognizer.initialize(this.currentLanguage);
    this.initRecognition();
    this.notification = null;        
    
    // window.setInterval (this.BlinkIt, 500);
    
    
  }
    // BlinkIt () {
    // var blink = this.blink;
    // this.color = (this.color == "#ffffff")? "red" : "#ffffff";
    // blink.style.color = this.color;
    // blink.style.fontSize='36px';}
    
    // ngOnDestroy() {
    //   if (blink) {
    //     clearInterval(this.blink);
    //   }
    // }
  onSelectLanguage(language: string) {
    this.currentLanguage = language;
    this.speechRecognizer.setLanguage(this.currentLanguage);
  }

  private initRecognition() {
    // this.finalTranscript="";
    this.speechRecognizer.onStart()
      .subscribe(data => {
        this.recognizing = true;
        // this.tryAgain.style.display = "none"
        document.getElementById("blink").style.visibility = "hidden";
        this.espectro.style.display="block";
        this.notification = 'I\'m listening...';
        this.diagnosticPara.style.color = "chocolate";
        this.diagnosticPara.textContent = "Listening                                                   ";
        // this.resultadoDiff.textContent = "";
        this.detectChanges();
      });

    this.speechRecognizer.onEnd()
      .subscribe(data => {
        this.recognizing = false;
        this.espectro.style.display="none";
        this.notification = null;
        this.diagnosticPara.textContent = "Say a color out loud and customize your background";
        // this.espectro.style.display = "none";
        console.log(this.finalTranscript);
        if (this.finalTranscript=="" || this.finalTranscript==" " || this.finalTranscript== null ){
          this.diagnosticPara.style.color = "firebrick";
          this.diagnosticPara.textContent = "Oops, i didn't hear you, please try again";
        }
        this.finalTranscript="";
        document.getElementById("blink").style.visibility = "visible";
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
          this.background.style.backgroundColor= speechResult;          
          // var acomparar:string;
          // let speechResultF:string;
          // acomparar = this.datos.act1[this.indiceFrase];
          // acomparar = acomparar.replace(/-/g,"");
          // acomparar = acomparar.replace(/,/g,"");
          // acomparar = acomparar.replace(/\./g,"");
          // acomparar = acomparar.replace(/!/g, "");
          // acomparar = acomparar.replace(/\?/g, "");
          // acomparar = acomparar.toLowerCase();
          // if (speechResult == acomparar){
          //   let playOk = new Audio;
          //   playOk.src = "/assets/audio/ok.mp3";
          //   playOk.volume = 0.05;
          //   playOk.play();
          //   this.ok.style.display = "block";
          //   setTimeout(()=>{
          //     this.ok.style.display = "none";
          //   }, 2000);
            this.espectro.style.display = "none";
            // this.siguiente.style.display = "block";
            this.diagnosticPara.style.color = "black";
            // this.recognizing = false;                         //   ESTE ES NUEVO, TEST ERROR            
          // } else{
          //   this.diagnosticPara.textContent = "Say a color out loud";            
            // let diff = jsdiff.diffWords(acomparar, speechResult);
            // var display = document.getElementById('display');
            // var fragment = document.createDocumentFragment();
            // diff.forEach(function(part){
            //   let color = part.added ? 'red' :
            //   part.removed ? 'black' : 'green';
            //   let tdecoration = part.added ? "none" : part.removed ? "line-through" : "none";
              
            //   var span = document.createElement('span');
            //   span.style.color = color;
            //   span.style.textDecoration = tdecoration;
            //   span.appendChild(document
            //     .createTextNode(part.value));
            //     fragment.appendChild(span);
            //   });
              // this.display.appendChild(fragment);
              // this.output.appendChild(fragment);
              // console.log(diff);
              // let playError = new Audio;
              // playError.src = "/assets/audio/tryagain.mp3";
              // playError.volume = 0.05;
              // playError.play();
              // this.contIncorrectas=this.contIncorrectas+1;
              // if (this.contIncorrectas == 3){
              //   this.siguiente.style.display= "block";
              // }
              // this.espectro.style.display = "none";
              // this.diagnosticPara.style.color = "firebrick";
              // this.tryAgain.style.display = "block";
              // setTimeout(()=>{
              //   this.tryAgain.style.display = "none";
              // },5000);
              this.recognizing = false;                       //Este es nuevo TEST ERROR
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

    startButton(event) {
      if (this.recognizing) {
        this.speechRecognizer.stop();
        return;
      }
      this.speechRecognizer.start(event.timeStamp);
    }

    goToBackActivity(){
      this.router.navigate(["/home"]);
    }
    
    goToNextActivity(){
      this.router.navigate(["/actividad1"]);
      
    }

  }
  

