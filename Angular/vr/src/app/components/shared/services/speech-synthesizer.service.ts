import { Injectable } from '@angular/core';

@Injectable()
export class SpeechSynthesizerService {

  synth = window.speechSynthesis;
  message: SpeechSynthesisUtterance;
  
  

  constructor() {
    this.initSynthesis();
  }

  initSynthesis(): void {
    this.message = new SpeechSynthesisUtterance();
    
    this.message.volume = 1;
    this.message.rate = 0.8;
    this.message.pitch = 1; 
  }
  
  speak(message: string, language: string): void {
    
      let voices = speechSynthesis.getVoices();
      for (let voice of voices){
        if ((voice.lang === 'en-US') && (voice.name === "Google US English")){
            this.message.voice = voice;
        }
      }
 
    // setTimeout(function () {
    //   // After 1 second, get the voices now Chrome is listening.
    //   speechSynthesis.getVoices().forEach(function (voice) {
    //   console.log('Hi! My name is ', voice.name);
    //   console.log(voice);
    //   });
    // }, 1000);
    
    this.message.lang = language;
    this.message.text = message;
    speechSynthesis.speak(this.message);    
  }
  
  onSynthesisEnd(){
    this.message.onend=()=>{
      alert("Termino");
    }
  }
}
