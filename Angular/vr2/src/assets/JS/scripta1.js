var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var synth = window.speechSynthesis;
var phrases = new Array();
/*var phrases = [
  'Hello',
  'Blue',
  'White',
  '13',
  'Windows',
  'Happy birthday',
  'Christmas',
  'W',
  'Q',
  'Orange',
  'Good morning',
  'Good afternoon',
  'Good evening',
  'Good night'
];*/

var phrasePara = document.querySelector('.phrase');
var resultPara = document.querySelector('.result');
var diagnosticPara = document.querySelector('.output');
var resultado = document.querySelector('.resultado');
//var testBtn = document.querySelector('button');
var testBtn = document.getElementById('botonEscucha');
//var divCorrecto = document.getElementById('correcto');
//var divIncorrecto = document.getElementById('incorrecto');
var voiceSelect = document.querySelector('select');
var fraseLeida = document.getElementById('fraseLeida');
var indiceFrase = 0;
var contIncorrectas = 0;
var btnStart = document.getElementById('btnStart');
var btnPlay = document.getElementById('play');
var pFrase = document.getElementById('pFrase');
var espectro = document.getElementById('espectro');
var siguiente = document.getElementById('siguiente');
var next = document.getElementById('next');

var divInfo = document.getElementById('divInfo');
var contenedorInfo = document.getElementById('contenedorInfo');
var ok = document.getElementById('ok');
var tryAgain = document.getElementById('tryAgain');
var lnkNext = document.getElementById('lnkNext');

var Pnombre = document.getElementById('Pnombre');
var Pactividad = document.getElementById('Pactividad');
var Punidad = document.getElementById('Punidad');

var btnPlay = document.getElementById('play');
var phrasePara = document.querySelector('.phrase');
var voices = [];

var vozHombre = document.getElementById('vozHombre');
var vozMujer = document.getElementById('vozMujer');
var vozMaquina = document.getElementById('vozMaquina');
var voz = '11';

// datosCabecera();
// datos();
// testBtn.disabled = true;
// btnPlay.disabled = true;
// siguiente.style.display='none';
// next.style.display='none';
function comenzar()
{
	phrasePara.textContent =phrases[indiceFrase];
	btnStart.style.display= 'none';
	pFrase.style.display= 'block';
	testBtn.disabled = false;
	btnPlay.disabled = false;
}

function Fspeak2(frase){
btnPlay.disabled = true;
	vozHombre.disabled = true;
	vozMujer.disabled = true;
    vozMaquina.disabled = true;
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (phrasePara.textContent !== '') {
    var utterThis = new SpeechSynthesisUtterance(frase);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
btnPlay.disabled = false;
	vozHombre.disabled = false;
	vozMujer.disabled = false;
    vozMaquina.disabled = false;
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
btnPlay.disabled = false;
	vozHombre.disabled = false;
	vozMujer.disabled = false;
    vozMaquina.disabled = false;
    }

        utterThis.voice = voices[voz];


    utterThis.pitch = 0.9;
    utterThis.rate = 0.8;
    synth.speak(utterThis);
  }
}

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });
  var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}


function randomPhrase() {
  var number = Math.floor(Math.random() * phrases.length);
  return number;
}

function checkDifferences(text1, text2){
  if (text1.length && text2.length){
    var words1 = text1.split(' ');
    var words2 = text2.split(' ');
    // Busca la mayor coincidencia
    for(var i=(words1.length > words2.length ? words2.length : words1.length); i > 0; i--){
      for(var j=0; j<=words1.length - i; j++){
        var pattern = words1.slice(j, j+i).join(' ');
        var coincidence = text2.indexOf(pattern);
        if (coincidence >= 0){
          // Coincidencia encontrada
          // Objeto diferencias de los textos anteriores a la coincidencia
          var differencesBefore = checkDifferences(words1.slice(0, j).join(' '),
                                      text2.substring(0, coincidence).trim());
          // Objeto diferencias de los textos posteriores a la coincidencia
          var differencesAfter = checkDifferences(words1.slice(j+i).join(' '),
                                      text2.substring(coincidence + pattern.length).trim());
          // Devuelve diferencias anteriores, posteriores y coincidencia actual
          return{
            differences1: differencesBefore.differences1.concat(differencesAfter.differences1),
            differences2: differencesBefore.differences2.concat(differencesAfter.differences2),
            coincidences: differencesBefore.coincidences.concat([pattern], differencesAfter.coincidences)
          }
        }
      }
    }
  }
  // No se ha encontrado coincidencias
  return {
    differences1: text1.length ? [text1] : [],
    differences2: text2.length ? [text2] : [],
    coincidences: []
  };
}

function checkDifferencesByLength(text1, text2, length){
  var words1 = text1.split(' ');
  if (words1.length < length) return null;

  var differences = [];
  for (var i=0; i+length<=words1.length; i++){
    var pattern = words1.slice(i, i+length).join(' ');
    if (text2.indexOf(pattern)<0) differences.push(pattern);
  }
  return differences;
}

/*function playSound(el,soundfile) {
  if (el.mp3) {
	  if(el.mp3.paused) el.mp3.play();
	  else el.mp3.pause();
  } else {
	  el.mp3 = new Audio(soundfile);
	  el.mp3.play();
  }
}*/
function playSound(el,soundfile) {
	  vozHombre.disabled = true;
      vozMujer.disabled = true;
      vozMaquina.disabled = true;
      btnPlay.disabled = true;
	  el.mp3 = new Audio(soundfile);
	  el.mp3.play();
	  el.mp3.onended = function() {audioEnd()}
}

function audioEnd()
{
	vozHombre.disabled = false;
	vozMujer.disabled = false;
    vozMaquina.disabled = false;
    btnPlay.disabled = false;
}

function testSpeech() {
  testBtn.disabled = true;
  btnPlay.disabled = true;
    vozHombre.disabled = true;
    vozMujer.disabled = true;
    vozMaquina.disabled = true;
	espectro.style.display='block';
	siguiente.style.display = 'none';
	fraseLeida.style.color= 'black';
  //testBtn.textContent = 'Test en progreso....';

  //var phrase = phrases[randomPhrase()];
	var phrase = phrases[indiceFrase];
  // To ensure case consistency while checking with the returned output text
  phrase = phrase.toLowerCase();
  phrase = phrase.trim();
  //phrasePara.textContent = phrase;
  //resultPara.textContent = 'Bien o Mal ??';
  //resultPara.style.background = 'rgba(0,0,0,0.2)';
  diagnosticPara.textContent = '...Mensaje de diagnostico';

  var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase +';';
  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  //divCorrecto.style.visibility= 'hidden';
  //divIncorrecto.style.visibility= 'hidden';
  diagnosticPara.textContent = 'Listening'
  resultado.textContent = '';
  recognition.start();

  recognition.onresult = function(event) {
    // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The first [0] returns the SpeechRecognitionResult at position 0.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The second [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object
    var speechResult = event.results[0][0].transcript.toLowerCase();
    diagnosticPara.textContent = '.' + speechResult + '.';
    var phrase2 = phrase;
	phrase2 = phrase2.replace(/\?/g, "");
	phrase2 = phrase2.replace(/-/g, "");
	phrase2 = phrase2.replace(/,/g, "");
	phrase2 = phrase2.replace(/\./g, "");
	phrase2 = phrase2.replace(/\!/g, "");
    if(speechResult === phrase2) {
      //resultPara.textContent = 'Frase dicha correctamente!';
      //resultPara.style.background = 'yellow';
      //divCorrecto.style.visibility= 'visible';
      //Fspeak2('ok');
      ok.style.opacity='1';
      $("#ok").fadeIn(1000); //Despues de 2000
      $("#ok").fadeOut(4000);
		fraseLeida.style.color= 'green';
		//indiceFrase = indiceFrase + 1;
		siguiente.style.display='block';
		phrasePara.textContent = phrases[indiceFrase];
		diagnosticPara.textContent = phrasePara.textContent;
		resultado.style.visibility="hidden";

      playSound(this, 'ok.mp3');
    } else {
      //resultPara.textContent = 'Eso no suena bien....';
      //resultPara.style.background = 'red';
      //divIncorrecto.style.visibility= 'visible';
     //Fspeak2('try again');
     tryAgain.style.opacity='1';
	 $("#tryAgain").fadeIn(1000); //Despues de 2000
	 $("#tryAgain").fadeOut(4000);
	resultado.style.visibility="visible";	
     contIncorrectas = contIncorrectas + 1;
		fraseLeida.style.color= 'blue';
		resultado.style.color= 'red';
     playSound(this, 'tryagain.mp3');
     if (contIncorrectas == 6)
     {
		 contIncorrectas = 0
		 siguiente.style.display='block';
		 }

    }
    //resultado.textContent = ' <div class=\"container--compare-blocks\"><div class=\"compare-block compare-block-two\"><div class=\"block\" id=\"block2\"><p class=\"phrase\"></p></div></div><div class=\"compare-block compare-block-one\">	<div class=\"block\" id=\"block1\">	<p class=\"output\"></p></div></div><article class=\"container--diff\">	<section id=\"diff\" class=\"diff\"></section></article></div><script src=\"js/libs/jquery-1.11.1.min.js\" type=\"text/javascript\" charset=\"utf-8\"></script>	<script src=\"js/index.js\" type=\"text/javascript\" charset=\"utf-8\"></script>';

   var texto = phrase;
   var texto2 = speechResult;

    var result = checkDifferences(texto, texto2);
    resultado.textContent = result.differences2.join('\n');
    /*phrasePara.textContent = texto + '\n' + result.differences2.join('\n');*/
    console.log('Confidencia: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
    testBtn.disabled = false;
    btnPlay.disabled = false;
    vozHombre.disabled = false;
    vozMujer.disabled = false;
    vozMaquina.disabled = false;
	espectro.style.display="none";
    //testBtn.textContent = 'Iniciar nuevo test';
  }

  recognition.onerror = function(event) {
    testBtn.disabled = false;
    btnPlay.disabled = false;
    vozHombre.disabled = false;
    vozMujer.disabled = false;
    vozMaquina.disabled = false;
	espectro.style.display="none";
    //testBtn.textContent = 'Iniciar nuevo test';
    diagnosticPara.textContent = 'Oops! error detected: ' + event.error;
  }

  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }

  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }

  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }

  recognition.onnomatch = function(event) {
      //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
      console.log('SpeechRecognition.onnomatch');
  }

  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }

  recognition.onsoundend = function(event) {
      //Fired when any sound — recognisable speech or not — has stopped being detected.
      console.log('SpeechRecognition.onsoundend');
  }

  recognition.onspeechstart = function (event) {
      //Fired when sound that is recognised by the speech recognition service as speech has been detected.
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
      console.log('SpeechRecognition.onstart');
  }
}
function Fspeak2(frase){
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (frase.textContent !== '') {
    var utterThis = new SpeechSynthesisUtterance(frase);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }

        utterThis.voice = voices[voz];


    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  }
}

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });
  var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function escucha()
{

	 if (voz == '11')
	 {
		 var phrase = phrases[parseInt(indiceFrase)];
	 Fspeak2(phrase);
	 }
	 else
	 {
		 playSound(this, 'css/audio/' + voz + '/' + indiceFrase + '.mp3');
		 }
}
function cambiaVozH()
{
	voz = 'h';
	playSound(this, 'css/audio/h/' + indiceFrase + '.mp3');
}
function cambiaVozM()
{
	voz = 'm';
	playSound(this, 'css/audio/m/' + indiceFrase + '.mp3');
}
function cambiaVozMaq()
{
	voz= '11';
	escucha();
}
function fraseSiguiente()
{
	diagnosticPara.textContent = ''
    resultado.textContent = '';
	fraseLeida.style.color= 'black';
	indiceFrase = indiceFrase + 1;
	siguiente.style.display='none';
	contIncorrectas = 0;
	var phrase = phrases[indiceFrase];
	if (indiceFrase > phrases.length - 1){
		testBtn.disabled = true;
		next.style.backgroundImage = "url('css/imagenes/next.gif')";
		next.style.display='block';
		//indiceFrase = 0;
		//phrase = phrases[indiceFrase];
		//phrasePara.textContent = phrase;
		}
	else
		{
    		phrasePara.textContent = phrase;
		}
}
function mostrarInfo1()
{
	contenedorInfo.className  = 'mostrarInfo';
}
function ocultaInfo()
{
	contenedorInfo.className  = "ocultaInfo";
}
// function datos()
// {
// 	var archivoTxt = new XMLHttpRequest();
// 	var fileRuta = '../content/frases.txt';
// 	// var fileRuta = 'contenido/frases.txt';
// 	archivoTxt.open("GET",fileRuta,true);
// 	archivoTxt.send(null);
// 	var txt = archivoTxt.responseText;
//     phrases = txt.split(';');
// }
// function datosCabecera()
// {
// 	var DCabecera = new Array();
// 	var archivoTxt = new XMLHttpRequest();
// 	var fileRuta = 'content/cabecera.txt';
// 	// var fileRuta = '../parametros/cabecera.txt';
// 	archivoTxt.open("GET",fileRuta,true);
// 	archivoTxt.send(null);
// 	var txt = archivoTxt.responseText;
//     DCabecera = txt.split(';');
//      Pnombre.textContent = DCabecera[0];
//      Pactividad.textContent = DCabecera[1];
//      Punidad.textContent = DCabecera[2];
// }

siguiente.addEventListener('click', fraseSiguiente);

divInfo.addEventListener('mouseover', mostrarInfo1);
divInfo.addEventListener('mouseout', ocultaInfo);

testBtn.addEventListener('click', testSpeech);
btnStart.addEventListener('click', comenzar);

btnPlay.addEventListener('click', escucha);

vozHombre.addEventListener('click', cambiaVozH);
vozMujer.addEventListener('click',  cambiaVozM);
vozMaquina.addEventListener('click',  cambiaVozMaq);




