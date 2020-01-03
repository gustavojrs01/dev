import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSoapService, Client, ISoapMethodResponse } from "ngx-soap";



// angular.module('spotyApp', ['angularSoap']);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  axios = require('axios').default;
  cliente:Client;
  usuario="gustavo_zs";
  clave="36936";
  codigo="Level 8_u1_pretest1";
  message:any;
  body = {
    usuario:this.usuario,
    clave:this.clave,
    modulo:this.codigo
  };

  
  constructor(private soap:NgxSoapService) { 
    let xmls='<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:wssEla">\
    <soapenv:Header/>\
    <soapenv:Body>\
       <urn:login soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\
          <usuario xsi:type="xsd:string">gustavo_zs</usuario>\
          <clave xsi:type="xsd:string">36936</clave>\
          <modulo xsi:type="xsd:string">Level 8_u1_pretest1</modulo>\
       </urn:login>\
    </soapenv:Body>\
 </soapenv:Envelope>';

 

this.axios.post('/wss.php?wsdl',
           xmls,
           {headers:
             {'Content-Type': 'text/xml'}
           }).then(res=>{
             console.log(res);
           }).catch(err=>{console.log(err)});

  }
}

